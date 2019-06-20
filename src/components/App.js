import React from 'react';
import './App.scss';
import Home from './Home';
import fetchPokemon from '../services/fetchPokemon';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fetchOk: false,
      inputValue: '',
    };
    this.getPokemons = this.getPokemons.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    this.getPokemons();
  }
  getPokemons() {
    fetchPokemon()
      .then(data => {
        return data.results.forEach(item => {
          fetch(item.url)
            .then(response => response.json())
            .then(pokemonData => {
              return (
                this.setState(prevState => {
                  return {
                    data: [
                      ...prevState.data,
                      pokemonData],
                    fetchOk: true,
                  }
                })
              )

            })
        });
      })

  }

  handleInputChange(event) {
    const { value } = event.target;
    this.setState(prevState => {
      return {
        ...prevState,
        inputValue: value
      };
    });
  }

  render() {
    const { data, fetchOk, inputValue } = this.state;
    return (
      <div className="App">
        {fetchOk
          ? (<Home
            data={data}
            fetchOk={fetchOk}
            onInputChange={this.handleInputChange}
            inputValue={inputValue}
          />)
          : (<p>Loading ...</p>)
        }
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.scss';
import Home from './Home';
import fetchPokemon from '../services/fetchPokemon';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fetchPokemonOk: false,
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
              fetch(pokemonData.species.url)
              .then(response => response.json())
              .then(speciesData => {
                pokemonData.speciesData = speciesData
              })
              return (
                this.setState(prevState => {
                  return {
                    data: [
                      ...prevState.data,
                      pokemonData],
                    fetchPokemonOk: true,
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
    const { data, fetchPokemonOk, inputValue, speciesData } = this.state;
    return (
      <div className="App">
        {fetchPokemonOk 
          ? (<Home
            data={data}
            speciesData={speciesData}
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

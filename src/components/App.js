import React from 'react';
import './App.scss';
import Home from './Home';
import fetchPokemon from '../services/fetchPokemon';
import fetchEvolution from '../services/fetchEvolution';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fetchOk: false,
      inputValue: '',
      evolutionData: [],
    };
    this.getPokemons = this.getPokemons.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getEvolution = this.getEvolution.bind(this);
  }
  componentDidMount() {
    this.getPokemons();
    this.getEvolution();
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

  getEvolution() {
    fetchEvolution()
      .then(data => {
        console.log(data);
        return data.results.forEach(item => {
          fetch(item.url)
            .then(response => response.json())
            .then(data => {
              console.log(data)
              return (
                this.setState(prevState => {
                  return {
                    evolutionData: [
                      ...prevState.evolutionData,
                      data],
                  }
                })
              )
            }
            )

        });
      });
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

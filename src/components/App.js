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
      fetchPokemonOk: false,
      inputValue: '',
      evolutionData: [],
      fetchEvolutionOk: false,
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
                    fetchPokemonOk: true,
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
        return data.results.forEach(item => {
          fetch(item.url)
            .then(response => response.json())
            .then(data => {
                fetch(data.evolution_chain.url)
                .then(response => response.json())
                .then(data => {
                  this.setState(prevState => {
                    return {
                      evolutionData: [
                        ...prevState.evolutionData,
                        data],
                      fetchEvolutionOk: true
                    }
                  })
              })
            // }
            // )

        });
      });})
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
    const { data, fetchPokemonOk, inputValue, evolutionData, fetchEvolutionOk } = this.state;
    return (
      <div className="App">
        {fetchPokemonOk && fetchEvolutionOk
          ? (<Home
            data={data}
            fetchPokemonOk={fetchPokemonOk}
            evolutionData={evolutionData}
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

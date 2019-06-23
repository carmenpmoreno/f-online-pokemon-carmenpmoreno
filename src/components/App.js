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
    // this.getSpecies = this.getSpecies.bind(this);
  }
  componentDidMount() {
    this.getPokemons();
  }
  componentWillUpdate(nextState) {
    if (this.state.data.length === 24) {
      console.log('data ya está relleno');
      this.getSpecies();
    } else { console.log('no se ejecuta la función') }
  }
  getPokemons() {
    fetchPokemon()
      .then(data => {
        return data.results.forEach(item => {
          fetch(item.url)
            .then(response => response.json())
            .then(pokemonData => {
              // fetch(pokemonData.species.url)
              // .then(response => response.json())
              // // añado los datos de species, donde viene la evolucion del pokemon, a pokemondata
              // .then(speciesData => {
              //   pokemonData.species_data = {
              //     pokemonSpecie: speciesData
              //   }
              // })
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

  getSpecies() {
    if (this.state.data.length === 24) {
      // const speciesUrl = this.state.data.map(item => {
      //   return (item.species.url);
      // });
      // console.log(speciesUrl);
      this.state.data.map(item => {
        const speciesUrl =item.species.url;
        fetch(speciesUrl)
        .then(response => response.json())
        // añado los datos de species, donde viene la evolucion del pokemon, a pokemondata
        .then(speciesData => {
        item.species_data = {
        pokemonSpecie: speciesData
        }
        })
      });      
    } else {
      console.log('no hay info en data aún');
    }
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
    const { data, fetchPokemonOk, inputValue } = this.state;
    return (
      <div className="App">
        {fetchPokemonOk
          ? (<Home
            data={data}
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

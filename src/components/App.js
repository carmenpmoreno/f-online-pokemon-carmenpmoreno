import React from 'react';
import './App.scss';
import Home from './Home';
import fetchPokemon from '../services/fetchPokemon';
import { Route, Switch } from 'react-router-dom'
import Detail from './Detail';

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
  componentWillUpdate() {
    if (this.state.data.length === 24) {
      console.log('data ya está relleno');
      this.getSpecies();
    }
  }

  getPokemons() {
    fetchPokemon()
      .then(data => {
        return data.results.forEach(item => {
          fetch(item.url)
            .then(response => response.json())
            .then(pokemonData => {
              // to set pokemonData on state.data
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
      this.state.data.map(item => {
        const speciesUrl = item.species.url;
        fetch(speciesUrl)
          .then(response => response.json())
          .then(speciesData => {
            // to add speciesData on data (item.species_data.pokemonSpecie)
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
          ? (<Switch>
            <Route
              exact path="/"
              render={() => (
                <Home
                  data={data}
                  onInputChange={this.handleInputChange}
                  inputValue={inputValue}
                />
              )}
            />
            <Route
              path="/pokemon-detail/:pokemonId"
              // component={Detail}
              render={routerProps =>
                <Detail
                  match={routerProps.match}
                  data={data}
                />
              }
            />
          </Switch>
  
            )
          : (<p>Loading ...</p>)
          }
      </div>
          );
        }
      }
      
      export default App;

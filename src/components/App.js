import React from "react";
import "./App.scss";
import Home from "./Home";
import fetchPokemon from "../services/fetchPokemon";
import { Route, Switch } from "react-router-dom";
import Detail from "./Detail";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fetchPokemonOk: false,
      inputValue: ""
    };
    this.getPokemons = this.getPokemons.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.getPokemons();
  }

  getPokemons() {
    fetchPokemon().then(data => {
      return data.results.forEach(item => {
        fetch(item.url)
          .then(response => response.json())
          .then(pokemonData => {
            const speciesUrl = pokemonData.species.url;

            fetch(speciesUrl)
              .then(response => response.json())
              .then(speciesData => {
                const evolutionChainUrl = speciesData.evolution_chain.url;

                fetch(evolutionChainUrl)
                  .then(response => response.json())
                  .then(evolutionData => {
                    // // to add species and evolutionData on json "pokemondata"
                    pokemonData.species_data = {
                      pokemonSpecie: speciesData,
                      evolution_data: evolutionData
                    };

                    // to set pokemonData on state.data
                    return this.setState(prevState => {
                      return {
                        data: [...prevState.data, pokemonData],
                        fetchPokemonOk: true
                      };
                    });
                  });
              });
          });
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
    const { data, fetchPokemonOk, inputValue } = this.state;
    console.log("--> render");
    return (
      <div className="App">
        {fetchPokemonOk ? (
          <Switch>
            <Route
              exact
              path="/"
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
              render={routerProps => (
                <Detail match={routerProps.match} data={data} />
              )}
            />
          </Switch>
        ) : (
          <p>Loading ...</p>
        )}
      </div>
    );
  }
}

export default App;

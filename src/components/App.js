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
    };
    this.getPokemons = this.getPokemons.bind(this);
  }
  componentDidMount() {
    this.getPokemons();
  }
  getPokemons() {
    fetchPokemon()
      .then(data => {
        console.log('data del fetch 1', data.results);
        // PARA HACER FETCH DE CADA URL QUE ME devuelve el array de objetos de data
        return data.results.map(item => {
          fetch(item.url)
            .then(response => response.json())
            .then(pokemonData => {
              return (
                this.setState(prevState => {
                  return {
                    data:[
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
  render() {
    const { data, fetchOk } = this.state;
    // console.log('data en el estado', data);
    return (
      <div className="App">
        {fetchOk
          ? (<Home
            data={data}
          />)
          : (<p>Loading ...</p>)
        }
      </div>
    );
  }
}

export default App;

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
          return (
            fetch(item.url)
              .then(response => response.json())
              .then(dataAllPokemon => {
                console.log('data del fetch 2', dataAllPokemon);
                this.setState({
                  data: dataAllPokemon,
                  fetchOk: true,
                })
              })
          );
        });
      })
  }
  render() {
    const { data, fetchOk } = this.state;
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

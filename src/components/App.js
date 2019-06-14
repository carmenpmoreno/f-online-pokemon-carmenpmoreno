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
      this.setState({
        data: data.results,
        fetchOk: true,
      })
    })
  }
  render() {
    const {data} = this.state;
    return (
      <div className="App">
          <Home
            data={data}
          />
      </div>
    );
  }
}

export default App;

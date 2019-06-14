import React from 'react';
import './App.scss';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fetchOk: false,
    };
  }
  render() {
    return (
      <div className="App">
        <p>App</p>
          <Home
          />
      </div>
    );
  }
}

export default App;

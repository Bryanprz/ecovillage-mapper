import React, { Component } from 'react';
import logo from '../logo.png';
import '../App.css';
import GoogleMap from './google_map';
import SearchBar from './search_bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the new World</h1>
        </header>
        <p className="App-intro">
          Mapa para busquar encuentros, eco-aldeas, ceremonias y mas...
        </p>
        <SearchBar />
        <GoogleMap lat="48.137" lon="11.5752" />
      </div>
    );
  }
}

export default App;

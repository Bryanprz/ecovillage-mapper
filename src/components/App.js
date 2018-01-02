import React, { Component } from 'react';
import logo from '../logo.png';
import '../style/App.css';
import GoogleMap from './google_map';
import LocationNewForm from './location_new_form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          Mapa para busquar encuentros, eco-aldeas, ceremonias y mas...
        </p>
        <div className="row">
          <LocationNewForm />
          <GoogleMap lat="48.137" lng="11.5752" />
        </div>
      </div>
    );
  }
}

export default App;

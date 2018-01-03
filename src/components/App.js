import React, { Component } from 'react';
import logo from '../logo.png';
import '../style/App.css';
import GoogleMap from './google_map';
import LocationNewForm from './location_new_form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar title="EcoAldeas" className="App-title" />
          <div className="notice"></div>
          <div className="row">
            <div className="col-md-4">
              <LocationNewForm />
            </div>
            <div className="col-md-8">
              <GoogleMap lat="6.2442" lng="75.5812" />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

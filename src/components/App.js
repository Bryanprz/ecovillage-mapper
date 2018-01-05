import React, { Component } from 'react';
import logo from '../logo.png';
import '../style/App.css';
import GoogleMap from './google_map';
import LocationNewForm from './location_new_form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Search from './search';
import 'react-instantsearch-theme-algolia/style.css';
import { InstantSearch } from 'react-instantsearch/dom';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar title="EcoAldeas" className="App-title" />
          <div className="notice"></div>
          <div className="row col-md-12">
          <InstantSearch
            appId="J0GCXLWRZ3"
            apiKey="c7cf3c81f688ae18a011b652b18b2196"
            indexName="dev_LOCATIONS"
          >
            <Search />
          </InstantSearch>
          </div>
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

import React, { Component } from 'react';

//   Assets
import logo from '../logo.png';
import '../style/App.css';

//   Components
import GoogleMap from './google_map';
import LocationNewForm from './location_new_form';

//   Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import Search from './search';
import Subheader from 'material-ui/Subheader';

//   Algolia Search
import 'react-instantsearch-theme-algolia/style.css';
import { InstantSearch } from 'react-instantsearch/dom';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar title="EcoAldeas" className="App-title" />
          <div className="notice"></div>
          <Tabs>
            <Tab label="Buscar">
              <div className="row no-gutters">
                <div className="sidebar col-sm-3">
                  <InstantSearch
                    appId="J0GCXLWRZ3"
                    apiKey="c7cf3c81f688ae18a011b652b18b2196"
                    indexName="dev_LOCATIONS"
                  >
                    <Search />
                  </InstantSearch>
                </div>
              </div>
            </Tab>
            <Tab label="Agregar">
              <div className="row no-gutters">
                <Subheader>Agregar Nueva Eco-Aldea</Subheader>
                <div className="col-md-4">
                  <LocationNewForm />
                </div>
                <div className="col-md-8">
                  <GoogleMap lat="6.2442" lng="75.5812" />
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

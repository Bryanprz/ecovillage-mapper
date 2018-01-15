import React, { Component } from 'react';

//   Assets
import '../style/App.css';

//   Components
import GoogleMap from './google_map';
import LocationNewForm from './location_new_form';

//   Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import Search from './search';

//   Algolia Search
import 'react-instantsearch-theme-algolia/style.css';
import { InstantSearch } from 'react-instantsearch/dom';

class App extends Component {
  toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === "none") {
      sidebar.style.display = "block";
    } else {
      sidebar.style.display = "none";
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar 
            title="Gaia Unión Spir@ll" 
            className="app-bar" 
            onLeftIconButtonClick={this.toggleSidebar.bind(this)} 
          />
          <div className="notice"></div>
          <Tabs className="tabs">
            <Tab label="Buscar" className="tab">
              <div className="row no-gutters">
                <div className="sidebar"> 
                  <div id="sidebar">
                    <InstantSearch
                      appId="J0GCXLWRZ3"
                      apiKey="c7cf3c81f688ae18a011b652b18b2196"
                      indexName="dev_LOCATIONS"
                    >
                      <Search />
                    </InstantSearch>
                  </div>
                </div>
                <div className="col-sm">
                  <GoogleMap lat="6.2442" lng="75.5812" />
                </div>
              </div>
            </Tab>

            <Tab label="Agregar" className="tab">
              <div className="row no-gutters">
                <div className="sidebar col-sm-3">
                  <LocationNewForm />
                </div>
                <div className="col-sm-9">
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

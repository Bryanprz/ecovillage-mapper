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

//   Algolia Search
import 'react-instantsearch-theme-algolia/style.css';
import { InstantSearch } from 'react-instantsearch/dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tabsValue: 'a' }; 
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  componentDidUpdate() {
  }

  handleTabChange(value) {
    console.log('here: ', value, this.state);
    this.setState({ tabsValue: value }); 
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar title="EcoAldeas" className="App-title" />
          <div className="notice"></div>
          <Tabs
            value={this.state.value}
            onChange={this.handleTabChange} 
          >
            <Tab label="Buscar" value="a">
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
                <div className="col-sm-9">
                  <GoogleMap lat="6.2442" lng="75.5812" />
                </div>
              </div>
            </Tab>

            <Tab label="Agregar" value="b">
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

import React, { Component } from 'react';
import LocationDetail from './location_detail';
import { connect } from 'react-redux';
import { fetchLocations } from '../actions';
import '../style/styles.css';

class Locations extends Component {
  componentDidMount() {
    this.props.fetchLocations(); 
  }

  showLocations() {
    const locations = this.props.locations.locations;
    const locationsList = [];    

    for (var key in locations) {
      const locationObj = {};
      locationObj[key] = locations[key];
      locationsList.push(locationObj);
    }

    return locationsList.map( location => {
      const key = Object.keys(location)[0];
      return <LocationDetail 
        key={key} 
        location={Object.values(location)[0]} 
        id={key}
      />;
    });
  }

  render() { 
    if (!this.props.locations) {
      return <div>No Locations</div> 
    }

    return (
      <div className="location-list list-group">
        {this.showLocations()}
      </div>
    )
  }
}

function mapStateToProps({ locations }) {
  return  { locations };
}

export default connect(mapStateToProps, { fetchLocations })(Locations);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocations, deleteLocation, saveMap } from '../actions';
import '../style/google_map.css';
import axios from 'axios';
import _ from 'lodash';

class GoogleMap extends Component {
  initMap() {
    var lat = parseFloat(this.props.lat);
    var lng = parseFloat(this.props.lng); 

    const google = window.google;

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: {
        lat: lat,
        lng: lng
      }
    });

    return map;
  }

  addMarkerWindow(location = {}) {
    const google = window.google;

    const marker = new google.maps.Marker({
      map: this.map,
      position: location.coordinates
    });

    const windowContent = `
      <h4>${location.name}</h4>
      <p>Looking for: ${location.seeking}</p> 
      <p>Categorias:</p>
      <kbd>${location.categories}</kbd>
      `

    const infoWindow = new google.maps.InfoWindow({ 
      content: windowContent
    });

    infoWindow.open(this.map, marker);
  }

  showErrorMessage(message) {
    const el = document.getElementsByClassName("notice")[0];
    el.classList.add("error-message");
    el.innerHTML = message;
    setTimeout(() => el.innerHTML = "", 3000);
  }

  componentDidMount() {
    this.map = this.initMap();
    this.props.fetchLocations();
    this.props.saveMap(this.map);
  }

  setCoords(location) {
    const MAP_ROOT_URL = `https://maps.googleapis.com/maps/api/geocode/json`;
    const url = `${MAP_ROOT_URL}?address=${location.address}`;
    const request = axios.get(url);

    request.then( result => {
      try {
        location.coordinates = result.data.results[0].geometry.location;
        this.map.setCenter(location.coordinates);
        this.addMarkerWindow(location);
      } catch (e) {
        this.showErrorMessage(`Dirección no encontrada para ${location.address}`);
        this.props.deleteLocation(location.key);
      }
    });
  }

  componentDidUpdate() {
    if (this.props.filteredLocations) {
      _.toArray(this.props.filteredLocations).forEach( location => this.setCoords(location) );
    } else {
      _.toArray(this.props.locations).forEach( location => this.setCoords(location) );
    }
  }

  render() {
    return <div id="map" >Map component mounted</div>
  }
}

function mapStateToProps({ locations, filteredLocation, map }) {
  const propObject = {};

  if (filteredLocation !== null) {
    propObject.filteredLocations = {};    
    filteredLocation.key = filteredLocation.objectID;
    propObject.filteredLocations[filteredLocation.key] = filteredLocation;
  }

  if (locations !== null) {
    for (var key in locations.locations) {
      locations.locations[key].key = key;
    }
    propObject.locations = locations.locations;
  } 

  if (map !== null) {
    propObject.map = map;
  }

  console.log('prop object ', propObject);
  return propObject;
}

export default connect(mapStateToProps, { fetchLocations, deleteLocation, saveMap })(GoogleMap);

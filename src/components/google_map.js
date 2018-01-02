import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocations, deleteLocation } from '../actions';
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

    const categories = [];

    for (var categoryName in location) {
      if (location[categoryName] === true) {
        categories.push(categoryName);
      }
    }
    const windowContent = `
      <h4>${location.name}</h4>
      <p>Looking for: ${location.seeking}</p> 
      <p>Categorias:</p>
      <kbd>${categories}</kbd>
      `

    const infoWindow = new google.maps.InfoWindow({ 
      content: windowContent
    });

    infoWindow.open(this.map, marker);
  }

  clearErrorMessage() {
    const el = document.getElementsByClassName("App-intro")[0];
    el.innerText = '';            
  }

  showErrorMessage(message) {
    const el = document.getElementsByClassName("App-intro")[0];
    el.classList.add("error-message");
    el.innerHTML = message;
    console.log('here: ', el);
  }

  componentDidMount() {
    this.map = this.initMap();
    this.props.fetchLocations();
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
        console.error('Address not found for following location: ', location, 'Location deleted from database.');
        this.showErrorMessage(`Dirección no encontrada para ${location.address}`);
        this.props.deleteLocation(location.key);
      }
    });
  }

  componentDidUpdate() {
    //this.clearErrorMessage();
    _.toArray(this.props.locations).forEach( location => this.setCoords(location) );
  }

  render() {
    return <div id="map" >Map component mounted</div>
  }
}

function mapStateToProps({ locations }) {
  const propObject = {};

  if (locations !== null) {
    for (var key in locations.locations) {
      locations.locations[key].key = key;
    }
    propObject.locations = locations.locations;
  } 

  return propObject;
}

export default connect(mapStateToProps, { fetchLocations, deleteLocation })(GoogleMap);
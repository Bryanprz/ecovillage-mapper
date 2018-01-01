import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocations } from '../actions';
import '../style/google_map.css';
import axios from 'axios';
import _ from 'lodash';

class GoogleMap extends Component {
  initMap() {
    var lat = parseFloat(this.props.lat);
    var lng = parseFloat(this.props.lng); 

    const google = window.google;

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
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
        console.log('location: ', location);
        this.map.setCenter(location.coordinates);
        this.addMarkerWindow(location);
      } catch (e) {
        this.showErrorMessage("Dirección no encontrada");
      }
    });
  }

  componentDidUpdate() {
    this.clearErrorMessage();
    _.toArray(this.props.locations).forEach( location => this.setCoords(location) );
  }

  render() {
    return <div id="map" >Map component mounted</div>
  }
}

function mapStateToProps({ newLocation, locations }) {
  const propObject = {};

  if (locations !== null) {
    propObject.locations = locations.locations;
  } 

  if (newLocation[0]) {
    propObject.info = newLocation[0].info;
  }

  return propObject;
}

export default connect(mapStateToProps, { fetchLocations })(GoogleMap);

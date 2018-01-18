import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveMap } from '../actions';
import '../style/google_map.css';

export const MAP_ROOT_URL = `https://maps.googleapis.com/maps/api/geocode/json`;

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

  componentDidMount() {
    this.map = this.initMap();
    this.props.saveMap(this.map);
  }

  render() {
    return <div id="map" ></div>
  }
}

export default connect(null, { saveMap })(GoogleMap);

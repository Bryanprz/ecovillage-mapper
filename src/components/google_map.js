import React, { Component } from 'react';
import '../style.css';

export default class GoogleMap extends Component {
  componentDidMount() {
    console.log("refs for this component:", document.getElementById("map"));
    const google = window.google;
    var lat = parseFloat(this.props.lat);
    var lon = parseFloat(this.props.lon); 

    new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: {
        lat: lat,
        lng: lon
      }
    });
  }

  render() {
    return <div id="map">Map component mounted</div>
  }
}

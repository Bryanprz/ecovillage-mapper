import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/google_map.css';

class GoogleMap extends Component {
  initMap() {
    var lat = parseFloat(this.props.lat);
    var lng = parseFloat(this.props.lng); 

    const google = window.google;

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: {
        lat: lat,
        lng: lng
      }
    });

    return map;
  }

  addMarker(coordinates = {}) {
    const google = window.google;

    const marker = new google.maps.Marker({
      map: this.map,
      position: coordinates
    });

    const infoWindow = new google.maps.InfoWindow({ 
      content: this.props.info.seeking 
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
  }

  componentDidUpdate() {
    this.clearErrorMessage();
    this.props.info.request.then( result => {
      try {
        const coordinates = result.data.results[0].geometry.location;
        this.map.setCenter(coordinates);
        this.addMarker(coordinates);
      } catch (e) {
        this.showErrorMessage("Dirección no encontrada");
      }
    });
  }

  render() {
    return <div id="map" >Map component mounted</div>
  }
}

function mapStateToProps({ location }) {
  const propObject = {};
  if (location[0]) {
    propObject.info = location[0].info;
  }
  return propObject;
}

export default connect(mapStateToProps)(GoogleMap);

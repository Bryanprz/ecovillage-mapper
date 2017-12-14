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
      position: this.props.searchCoordinates
    });
  }
  
  componentDidMount() {
    this.map = this.initMap();
  }

  componentDidUpdate() {
    this.addMarker(this.props.searchCoordinates);
  }

  render() {
    return <div id="map" >Map component mounted</div>
  }
}

function mapStateToProps({ searchCoordinates }) {
  return { searchCoordinates: searchCoordinates[0] };
}

export default connect(mapStateToProps)(GoogleMap);

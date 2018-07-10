import React, { Component } from 'react';
import { connect } from 'react-redux';
import { connectHighlight } from 'react-instantsearch/connectors';
import Divider from 'material-ui/Divider';
import axios from 'axios';
import { deleteLocation } from '../actions';

const MAP_ROOT_URL = `https://maps.googleapis.com/maps/api/geocode/json`;

class Hit extends Component {
  constructor(props) {
    super(props);
    this.centerMap = this.centerMap.bind(this);
    this.map = this.props.map;
  }

  centerMap() {
    const hit = this.props.hit;
    this.map.setCenter(hit.coordinates);
  }

  componentDidMount() {
    this.setCoords(this.props.hit);
  }

  componentWillUnmount() {
    this.marker.setMap(null);
  }

  showErrorMessage(message) {
    const el = document.getElementsByClassName("notice")[0];
    el.classList.add("error-message");
    el.innerHTML = message;
    setTimeout(() => el.innerHTML = "", 3000);
  }

  setCoords(location) {
    var address = location.address;
    address = address.replace(/,/g, '').replace(/\./g, '').replace(/#/g, '').split(' ').join('+');
    const url = `${MAP_ROOT_URL}?address=${address}`;
    const request = axios.get(url);

    request.then( result => {
      try {
        location.coordinates = result.data.results[0].geometry.location;
        this.addMarkerWindow(location);
      } catch (e) {
        console.error('Error occurred when getting address for ' + location.name + ': ', e);
        this.showErrorMessage(`Dirección no encontrada para ${location.address}`);
        console.log('location key: ', location.key);
        if (location.key) { this.props.deleteLocation(location.key) };
      }
    });
  }

  addMarkerWindow(location = {}) {
    const google = window.google;

    this.marker = new google.maps.Marker({
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

    infoWindow.open(this.map, this.marker);
  }

  render() {
    return (
      <div onClick={this.centerMap}>
        <div key={ this.props.hit.objectID } className="hit">
          <span className="hit-name">
            <CustomHighlight attributeName="name" hit={this.props.hit} />
          </span>
          <small className="hit-address">
            <CustomHighlight attributeName="address" hit={this.props.hit} />
          </small>
          <span className="hit-seeking">
            <CustomHighlight attributeName="seeking" hit={this.props.hit} />
          </span>
        </div>
        <Divider />
      </div>
    );
  }
}

function mapStateToProps({ map }) {
  return { map };
}

const CustomHighlight = connectHighlight(
  ({ highlight, attributeName, hit, highlightProperty }) => {
    const parsedHit = highlight({ attributeName, hit, highlightProperty: '_highlightResult' }); 
    const highlightedHits = parsedHit.map( location => {
      if (location.isHighlighted) return <mark>{location.value}</mark>;
      return location.value; 
    });
    return <div>{highlightedHits}</div>;
  }    
);


export default connect(mapStateToProps, { deleteLocation })(Hit);

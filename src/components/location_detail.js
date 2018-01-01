import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteLocation } from '../actions';
import '../style/styles.css';

class LocationDetail extends Component {
  categories() {
    const categoriesList = [];

    for (var key in this.props.location) {
      if (this.props.location[key] === true) {
        categoriesList.push(key);
      }
    } 

    return categoriesList.toString();
  }

  render() {
    const location = this.props.location;
    const id = this.props.id;

    return (
      <div className="list-group-item">
        <h5>{ location['name'] }</h5>
        <div>{ location['address'] }</div>
        <div>Buscando: { location['seeking'] }</div>
        <small className="categories">{ this.categories() }</small><br />
        <button type="button" className="btn btn-success btn-sm">Aprobar</button>
        <button 
          type="button" 
          onClick={ () => this.props.deleteLocation(id) }
          className="btn btn-danger btn-sm">
          Borrar
        </button>
      </div>
    )
  }
};

export default connect(null, { deleteLocation })(LocationDetail);

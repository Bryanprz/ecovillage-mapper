import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
  	return (
  	  <form className="input-group">
  	    <input 
  	      type="search" 
  	      placeholder="Busqueda por ciudad o region"
  	      className="form-control"
  	    />
  	    <span className="input-group-btn">
  	      <button className="btn btn-secondary" type="submit">Buscar</button>
  	    </span>
  	  </form>
  	)
  }
}
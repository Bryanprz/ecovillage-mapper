import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLocation } from '../actions/index';
import { bindActionCreators } from 'redux';
import '../style/search_bar.css';

class SearchBar extends Component {
  constructor(props) {
  	super(props);
  	this.state = { term: '' };
  	this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
  	this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
  	event.preventDefault();
    this.props.addLocation(this.state.term); // sending to actioncreator
    this.setState({ term: '' });
  }

  render() {
  	return (
      <div className="col-md-4" >
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input 
            type="search" 
            value={this.state.term}
            placeholder="Agregue una nueva direccion al mapa"
            className="form-control"
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="submit">Buscar</button>
          </span>
        </form>
      </div>
  	)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addLocation }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

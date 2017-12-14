import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLocation } from '../actions/index';
import { bindActionCreators } from 'redux';
import '../style/search_bar.css';

class SearchBar extends Component {
  constructor(props) {
  	super(props);
  	this.state = { address: '' };
  	this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onCheckboxSelect = this.onCheckboxSelect.bind(this);
  }

  onInputChange(event) {
  	this.setState({ address: event.target.value });
  }

  onFormSubmit(event) {
  	event.preventDefault();
    this.props.addLocation(this.state.address); // sending to actioncreator
    this.setState({ address: '' });
  }

  onCheckboxSelect(event) {
    console.log("checkbox selected:", event);
  }

  render() {
  	return (
      <div className="col-md-4" >
        <h5>Agregue un nuevo lugar al mapa</h5>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <input 
              id="address-input"
              type="search" 
              value={this.state.address}
              placeholder="Direccion de nuevo lugar"
              className="form-control"
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            <div className="form-check">
              <input 
                id="value-1"
                type="checkbox" 
                onChange={this.onCheckboxSelect} 
                value="value 1" 
                className="form-check-input"
              />
                <label for="value-1" className="form-check-label">Value 1</label>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input 
                id="value-2"
                type="checkbox" 
                onChange={this.onCheckboxSelect} 
                value="value 2" 
                className="form-check-input"
              />
              <label for="value-2" className="form-check-label">Value 2</label>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input 
                id="value-3"
                type="checkbox" 
                onChange={this.onCheckboxSelect} 
                value="value 3" 
                className="form-check-input"
              />
              <label for="value-3" className="form-check-label">Value 3</label>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input 
                id="value-4"
                type="checkbox" 
                onChange={this.onCheckboxSelect} 
                value="value 4" 
                className="form-check-input"
              />
              <label for="value-4" className="form-check-label">Value 4</label>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input 
                id="value-5"
                type="checkbox" 
                onChange={this.onCheckboxSelect} 
                value="value 5" 
                className="form-check-input"
              />
              <label for="value-5" className="form-check-label">Value 5</label>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input 
                id="value-6"
                type="checkbox" 
                onChange={this.onCheckboxSelect} 
                value="value 6" 
                className="form-check-input"
              />
              <label for="value-6" className="form-check-label">Value 6</label>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input 
                id="value-7"
                type="checkbox" 
                onChange={this.onCheckboxSelect} 
                value="value 7" 
                className="form-check-input"
              />
              <label for="value-7" className="form-check-label">Value 7</label>
            </div>
          </div>
          <button className="btn btn-secondary" type="submit">Agregue Nuevo Lugar</button>
        </form>
      </div>
  	)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addLocation }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

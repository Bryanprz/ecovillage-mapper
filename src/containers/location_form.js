import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLocation } from '../actions/index';
import { bindActionCreators } from 'redux';
import Category from '../components/category';
import '../style/location_form.css';

class LocationForm extends Component {
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
          <Category value="value 1" id="value-1" />
          <Category value="value 2" id="value-2" />
          <Category value="value 3" id="value-3" />
          <Category value="value 4" id="value-4" />
          <Category value="value 5" id="value-5" />
          <Category value="value 6" id="value-6" />
          <Category value="value 7" id="value-7" />
          <button className="btn btn-secondary" type="submit">Agregue Nuevo Lugar</button>
        </form>
      </div>
  	)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addLocation }, dispatch);
}

export default connect(null, mapDispatchToProps)(LocationForm);

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
          <Category value="Salud y Bienestar" id="salud" />
          <Category value="Arte y Cultura" id="arte" />
          <Category value="Economías Solidarias" id="economias" />
          <Category value="PlataFormas de Incidencia Política / Institucional" id="politica" />
          <Category value="Plataformas de Pedagogía / Educación / Comunicación" id="educacion" />
          <Category value="EcoLogia Ambiental, EcoTurismo, Diseños y Tecnología" id="ecologia" />
          <Category value="Espiritualidad & Realización del Ser" id="espiritualidad" />
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

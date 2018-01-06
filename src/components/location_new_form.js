import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { addLocation } from '../actions';
import '../style/location_new.css';
import '../style/styles.css';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField, Checkbox } from 'redux-form-material-ui';
import Subheader from 'material-ui/Subheader';

class LocationNewForm extends Component {
  // callback that runs if handleSubmit (redux form prop) validates
  onSubmit(values) {
    this.props.addLocation(values); 
  }

  render() {
    // handleSubmit is a prop passed to this component from Redux form 
    // It's responsible for handling state and validation of form, not for posting data.
    // If handleSubmit validates, it runs the callback passed to it, in this case
    // this.onSubmit (including binding)
    
    const { handleSubmit } = this.props; 

    return (
      <div>
        <span className="form-subtitle">
          <Subheader>Agregar Nueva Eco-Aldea</Subheader>
        </span>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-style">
          <Field
            name="name"
            placeholder="Nombre de ubicación"
            component={TextField}
          />
          <Field
            name="address"
            placeholder="Direccion de nuevo lugar"
            type="text"
            component={TextField}
          />
          <Field
            name="seeking"
            placeholder="Que estan buscando?"
            type="text"
            component={TextField}
          />
          <div className="form-checkboxes">
            <Field
              name="salud"
              label="Salud y Bienestar"
              component={Checkbox}
            />
            <Field
              name="arte"
              label="Arte y Cultura"
              component={Checkbox}
            />
            <Field
              name="economias"
              label="Economías Solidarias"
              component={Checkbox}
            />
            <Field
              name="politica"
              label="PlataFormas de Incidencia Política / Institucional"
              component={Checkbox}
            />
            <Field
              name="educacion"
              label="Plataformas de Pedagogía / Educación / Comunicación"
              component={Checkbox}
            />
            <Field
              name="ecologia"
              label="EcoLogia Ambiental, EcoTurismo, Diseños y Tecnología"
              component={Checkbox}
            />
            <Field
              name="espiritualidad"
              label="Espiritualidad & Realización del Ser"
              component={Checkbox}
            />
          </div>
          <RaisedButton label="Agregue Nuevo Lugar" primary={true} type="submit" className="form-button" />
        </form>
      </div>
    )
  }
}

// redux form runs this upon submission
function validate(values) {
  const errors = {};

  // validate inputs
  if (!values.name) {
    errors.name = "Por favor ingrese un nombre para la ubicación"
  } 

  if (!values.address) {
    errors.address = "Por favor ingrese una direccion."
  }
  
  // if errors has any properties, redux form assumes it's invalid
  return errors; 
}

function afterSubmit(result, dispatch) {
  dispatch(reset('LocationNewForm'));
}

export default reduxForm({
  validate,
  form: 'LocationNewForm',
  onSubmitSuccess: afterSubmit
})(
  connect(null, { addLocation })(LocationNewForm)
);

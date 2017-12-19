import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../style/destination_new.css';

class DestinationNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field; // meta = field.meta; touched = meta.touched
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <div className="text-help">
          {touched ? error : ''}
        </div>
        <input
          placeholder={field.placeholder} 
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    )
  }

  renderCheckboxField(field) {
    return (
      <div className="form-group form-check">
        <input
          className="form-check-input"
          type="checkbox"
          {...field.input}
        />
        <label className="form-check-label">{field.label}</label>
      </div>
    )
  }

  // callback that runs if handleSubmit (redux form prop) validates
  onSubmit(values) {
    console.log(values);
  }

  render() {
    // handleSubmit is a prop passed to this component from Redux form 
    // It's responsible for handling state and validation of form, not for posting data.
    // If handleSubmit validates, it runs the callback passed to it, in this case
    // this.onSubmit (including binding)
    
    const { handleSubmit } = this.props; 

    return (
      <div className="col-md-4" >
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name="name"
            placeholder="Nombre de ubicación"
            type="text"
            component={this.renderField}
          />
          <Field
            name="address"
            placeholder="Direccion de nuevo lugar"
            type="text"
            component={this.renderField}
          />
          <Field
            name="request"
            placeholder="Que estan buscando?"
            type="text"
            component={this.renderField}
          />
          <Field
            name="salud"
            label="Salud y Bienestar"
            component={this.renderCheckboxField}
          />
          <Field
            name="arte"
            label="Arte y Cultura"
            component={this.renderCheckboxField}
          />
          <Field
            name="economias"
            label="Economías Solidarias"
            component={this.renderCheckboxField}
          />
          <Field
            name="politica"
            label="PlataFormas de Incidencia Política / Institucional"
            component={this.renderCheckboxField}
          />
          <Field
            name="educacion"
            label="Plataformas de Pedagogía / Educación / Comunicación"
            component={this.renderCheckboxField}
          />
          <Field
            name="ecologia"
            label="EcoLogia Ambiental, EcoTurismo, Diseños y Tecnología"
            component={this.renderCheckboxField}
          />
          <Field
            name="espiritualidad"
            label="Espiritualidad & Realización del Ser"
            component={this.renderCheckboxField}
          />
          <button className="btn btn-primary" type="submit">Agregue Nuevo Lugar</button>
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

export default reduxForm({
  validate,
  form: 'DestinationNewForm'
})(DestinationNew);

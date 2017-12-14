import React, { Component } from 'react';
import '../style/location_form.css';

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Category = (props) => {
  return (
    <div className="form-group">
      <div className="form-check">
        <input 
          id={props.id}
          type="checkbox" 
          value={props.value}
          className="form-check-input"
        />
        <label for={props.id} className="form-check-label">{capitalize(props.value)}</label>
      </div>
    </div>
  )
}

export default Category;

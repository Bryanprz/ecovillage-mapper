import React from 'react';
import '../style/styles.css';

const LocationDetail = ({ location }) => {
  const categories = [];
  
 for (var key in location) {
   if (location[key] === true) {
     categories.push(key);
   }
 } 

  return (
    <div className="list-group-item">
      <h5>{ location['name'] }</h5>
      <div>{ location['address'] }</div>
      <div>Buscando: { location['seeking'] }</div>
      <small className="categories">{ categories.toString() }</small><br />
      <button type="button" className="btn btn-success btn-sm">Aprobar</button>
      <button type="button" className="btn btn-danger btn-sm">Borrar</button>
    </div>
  )
};

export default LocationDetail;

import React from 'react';

const LocationDetail = ({ location }) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-md-2">
          <h3>{location['name']}</h3>
        </div>
        <div className="col-md-2">
          <div>{location['address']}</div>
        </div>
        <div className="col-md-4">
          <div>{location['seeking']}</div>
        </div>
        <div className="col-md-4">
          <small>tags go here...</small>
        </div>
      </div>
    </li>
  )
};

export default LocationDetail;

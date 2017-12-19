import axios from 'axios';

export const ADD_LOCATION = 'ADD_LOCATION';

const ROOT_URL = `https://maps.googleapis.com/maps/api/geocode/json`;

export function addLocation(values = {}) {
  const url = `${ROOT_URL}?address=${values.address}`;
  const request = axios.get(url);

  return { 
  	type: ADD_LOCATION,
  	payload: request
  };
}

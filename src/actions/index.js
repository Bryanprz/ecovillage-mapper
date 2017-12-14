import axios from 'axios';

export const SEARCH_TERM = 'SEARCH_TERM';

const ROOT_URL = `https://maps.googleapis.com/maps/api/geocode/json`;

export function addLocation(address = '') {
  const url = `${ROOT_URL}?address=${address}`;
  const request = axios.get(url);

  return { 
  	type: SEARCH_TERM,
  	payload: request
  };
}
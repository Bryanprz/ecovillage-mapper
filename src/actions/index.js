import axios from 'axios';
import * as firebase from 'firebase';

export const ADD_LOCATION = 'ADD_LOCATION';
export const FETCH_LOCATIONS = 'FETCH_LOCATIONS';
const MAP_ROOT_URL = `https://maps.googleapis.com/maps/api/geocode/json`;

var config = {
  apiKey: "AIzaSyC4UDfcaOGCd6rZpCp4EgB4oJljXEDBh6g",
  authDomain: "mapeo-e6a07.firebaseapp.com",
  databaseURL: "https://mapeo-e6a07.firebaseio.com",
  projectId: "mapeo-e6a07",
  storageBucket: "mapeo-e6a07.appspot.com",
  messagingSenderId: "501082432840"
};

firebase.initializeApp(config);

export function fetchLocations() {
  return dispatch => {
    firebase.database().ref().on('value', snapshot => {
      dispatch({
        type: FETCH_LOCATIONS,
        payload: snapshot.val()
      });
    });
  }
}

export function addLocation(values = {}) {
  firebase.database().ref().child('locations').push(values);

  const url = `${MAP_ROOT_URL}?address=${values.address}`;
  values.request = axios.get(url);

  return { 
  	type: ADD_LOCATION,
    values: values
  };
}

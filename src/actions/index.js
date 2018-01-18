import * as firebase from 'firebase';

export const FETCH_LOCATIONS = 'FETCH_LOCATIONS';
export const MAP = 'MAP';

var config = {
  apiKey: "AIzaSyC4UDfcaOGCd6rZpCp4EgB4oJljXEDBh6g",
  authDomain: "mapeo-e6a07.firebaseapp.com",
  databaseURL: "https://mapeo-e6a07.firebaseio.com",
  projectId: "mapeo-e6a07",
  storageBucket: "mapeo-e6a07.appspot.com",
  messagingSenderId: "501082432840"
};

firebase.initializeApp(config);
const database = firebase.database().ref().child('locations');

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
  return dispatch => database.push(values);
}

export function deleteLocation(id) {
  return dispatch => database.child(id).remove();
}

export function saveMap(map) {
  return {type: MAP, payload: map};
}

import { combineReducers } from 'redux';
import AddLocationReducer from './reducer_add_location';
import FetchLocationsReducer from './reducer_fetch_locations';
import { reducer as formReducer } from 'redux-form';

// State Tree
const rootReducer = combineReducers({
	newLocation: AddLocationReducer,
  locations: FetchLocationsReducer,
  form: formReducer
})

export default rootReducer;

// Ideal State Tree
//
// - Locations
//
// -- location 1 index (object)
// --- searchCoordinates (object)
// --- address (string)
// --- lookingFor (string)
// --- categories (array)
// --- link to homepage (link)
//
// -- location 2 index
// --- searchCoordiantes
// --- address (string)
// --- lookingFor (string)
// --- categories (array)
// --- link to homepage (link)

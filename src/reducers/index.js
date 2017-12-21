import { combineReducers } from 'redux';
import AddLocationReducer from './reducer_add_location';
import { reducer as formReducer } from 'redux-form';

// State Tree
const rootReducer = combineReducers({
	location: AddLocationReducer,
  form: formReducer
})

export default rootReducer;

// Ideal State Tree
//
// - Locations
//
// -- location 1 (object)
// --- searchCoordinates (object)
// --- address (string)
// --- lookingFor (string)
// --- categories (array)
// --- link to homepage (link)
//
// -- location 2
// --- searchCoordiantes
// --- address (string)
// --- lookingFor (string)
// --- categories (array)
// --- link to homepage (link)

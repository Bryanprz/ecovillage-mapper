import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';

// State Tree
const rootReducer = combineReducers({
	searchCoordinates: SearchReducer
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

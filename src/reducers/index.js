import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';

// State Tree
const rootReducer = combineReducers({
	searchCoordinates: SearchReducer
})

export default rootReducer;
import { combineReducers } from 'redux';
import FetchLocationsReducer from './reducer_fetch_locations';
import MapReducer from './reducer_map';
import { reducer as formReducer } from 'redux-form';

// State Tree
const rootReducer = combineReducers({
  locations: FetchLocationsReducer,
  map: MapReducer,
  form: formReducer
})

export default rootReducer;

import { combineReducers } from 'redux';
import FetchLocationsReducer from './reducer_fetch_locations';
import { reducer as formReducer } from 'redux-form';

// State Tree
const rootReducer = combineReducers({
  locations: FetchLocationsReducer,
  form: formReducer
})

export default rootReducer;

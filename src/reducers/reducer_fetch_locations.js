import { FETCH_LOCATIONS } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
  	case FETCH_LOCATIONS:
      return action.payload;
    default:
      return state;
  }
}

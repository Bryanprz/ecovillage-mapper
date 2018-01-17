import { FILTER_LOCATIONS } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
  	case FILTER_LOCATIONS:
      return action.payload;
    default:
      return state;
  }
}

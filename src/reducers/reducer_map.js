import { MAP } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
  	case MAP:
      return action.payload;
    default:
      return state;
  }
}

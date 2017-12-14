import { SEARCH_TERM } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
  	case SEARCH_TERM:
  	  if (!action.payload.data) {
  	  	return state;
  	  } else {
  	  	return [ action.payload.data.results[0].geometry.location, ...state ];
  	  }
    }

  return state;
}
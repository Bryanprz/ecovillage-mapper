import { SEARCH_TERM } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
  	case SEARCH_TERM:
  	  if (!action.payload.data) {
  	  	return state;
  	  } else if (action.payload.data.results[0]) {
  	  	return [ action.payload.data.results[0].geometry.location, ...state ];
  	  } else {
        return [null];
      }
    }

  return state;
}

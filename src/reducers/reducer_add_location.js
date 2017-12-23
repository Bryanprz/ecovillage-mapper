import { ADD_LOCATION } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
  	case ADD_LOCATION:
      if (action.values.request) {
        const locationObj = { info: action.values };
        return [ locationObj, ...state];
      } else {
        return [null];
      }
    }

  return state;
}

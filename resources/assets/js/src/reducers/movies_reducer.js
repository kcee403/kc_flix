import { MOVIES } from '../actions/actionTypes';

export default function movies(state = [], action) {
  switch(action.type) {
    case MOVIES:
      console.log("Movies are ", action.items);
      return action.items ? action.items : null;
    default:
    return state;
  }
}

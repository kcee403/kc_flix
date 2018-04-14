import * as actionTypes from './actionTypes.js';

export function requestMovies(items) { // movies gives the passed value/object an object reference, simple terms makes it a
  const action = {              // property that's paired with an action type,
    type: actionTypes.MOVIES,               // Example: action.type and action.items.
    items
  }
  return action;
}

export function addToFavorite(movieFavorited) { //
  const action = {
    type: actionTypes.ADD_FAV,
    movieFavorited,
  }
  return action;
}

export function removeFromFavorite(movie) {
  const action = {
    type: actionTypes.REMOVE_FAV,
    movie
  }
  return action;
}

export const logout = () => {
  const action = {
    type: actionTypes.LOGOUT,
  }
  return action;
}

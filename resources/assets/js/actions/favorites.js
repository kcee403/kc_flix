import * as actionTypes from './actionTypes.js';

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

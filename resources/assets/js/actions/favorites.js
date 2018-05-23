import * as actionTypes from './actionTypes.js';

export function addToFavorite(movieFavorited) { //
  const action = {
    type: actionTypes.ADD_FAV,
    movieFavorited,
  }
  return action;
}

export function removeFromFavorite(movieRemoved) {
  const action = {
    type: actionTypes.REMOVE_FAV,
    movieRemoved
  }
  return action;
}

export function postToFavorite(movieTitle, movieId) {
  const favorited = {
    id: movieId
  }

}

export const purchaseBurger = ( orderData, token ) => {
    return dispatch => {
        dispatch( purchaseBurgerStart() );
        axios.post( '/orders.json?auth=' + token, orderData )
            .then( response => {
                console.log( response.data );
                dispatch( purchaseBurgerSuccess( response.data.name, orderData ) );
            } )
            .catch( error => {
                dispatch( purchaseBurgerFail( error ) );
            } );
    };
};

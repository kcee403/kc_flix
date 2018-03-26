import { ADD_FAV } from '../actions/actionTypes';
import { REMOVE_FAV } from '../actions/actionTypes';

const initialState = {
  favorites: []
};

const addToFavorite = (state = initialState, action) => {
   switch (action.type) {
     case ADD_FAV:
      console.log("Movie added to favorites", action.movieFavorited);
      // let favoriteMovies = [...state, action.movie];
      return {
        ...state,
        favorites: state.favorites.concat(action.movieFavorited)
        // favorites: state.favorites.concat([...state, action.movie])
      }
     case REMOVE_FAV:
          return {
            ...state,
            favorites: state.favorites.filter( movie => action.movie.id !== movie.id)
          }
        default:
          return state;
    }
   }

export default addToFavorite;

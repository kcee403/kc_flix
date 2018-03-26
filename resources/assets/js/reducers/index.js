import movies from './movies_reducer';
import favorites from './fav_reducer'; //export defaults allows for you to rename your imports
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movies,
  fav: favorites,
});

export default rootReducer;

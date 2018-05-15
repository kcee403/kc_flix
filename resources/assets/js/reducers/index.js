import movies from './movies_reducer';
import favorites from './fav_reducer'; //export defaults allows for you to rename your imports
import { combineReducers } from 'redux';
import isAuthenticated from './auth_reducer';
import isAttemptingToAccess from './auth_reducer';

const rootReducer = combineReducers({
  movies,
  fav: favorites,
  auth: isAuthenticated,
  atmpt: isAttemptingToAccess,
});

export default rootReducer;

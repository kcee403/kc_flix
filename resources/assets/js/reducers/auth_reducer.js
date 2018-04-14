
import * as actionTypes from '../actions/actionTypes';
const initialState = {
  loggedin: false,
}

const logout = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.LOGOUT:
      console.log("LOGOUT REDUCER! ");

      return {
        ...state,
        isLoggedin: !isLoggedIn,
      }

    default:
    return state;
  }
}

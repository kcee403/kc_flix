import * as actionTypes from '../actions/actionTypes';
const initialState = {
  isAuthenticated: false,
}

const logout = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.LOGOUT:
      console.log("LOGOUT REDUCER! ");

      return {
        ...state,
        isAuthenticated: false,
      }
    case actionTypes.LOGIN:
      console.log("LOGIN REDUCER! ");

      return {
        ...state,
        isAuthenticated: true,
      }

    default:
    return state;
  }
}

export default logout;

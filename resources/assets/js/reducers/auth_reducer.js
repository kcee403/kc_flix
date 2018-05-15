import * as actionTypes from '../actions/actionTypes';
const initialState = {
  isAuthenticated: false,
  isAttemptingToAccess: false,
}

const authenticate = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ATTEMPTING:
      console.log("ATTEMPTING SWITCHED TO ");
      return {
        ...state,
        isAttemptingToAccess: true,
      }
    case actionTypes.CLOSINGMODAL:
      console.log("CLOSING MODAL! ");
      return {
        ...state,
        isAttemptingToAccess: false,
      }
    case actionTypes.LOGOUT:
      console.log("LOGOUT REDUCER! ");
      localStorage.removeItem('token');
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

export default authenticate;

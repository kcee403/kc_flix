import * as actionTypes from '../actions/actionTypes';
const initialState = {
  isAuthenticated: false,
}

const authenticate = (state = initialState, action) => {
  switch(action.type) {
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

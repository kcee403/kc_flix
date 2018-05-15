import * as actionTypes from './actionTypes.js';

export function logout(isAuthenticated) {
  const action = {
    type: actionTypes.LOGOUT,
    isAuthenticated
  }
  return action;
}

export function login(isAuthenticated) {
  const action = {
    type: actionTypes.LOGIN,
    isAuthenticated
  }
  return action;
}

export function attempting(isAuthenticated) {
  const action = {
    type: actionTypes.ATTEMPTING,
    isAuthenticated
  }
  return action;
}

export function closingModal() {
  const action = {
    type: actionTypes.CLOSINGMODAL,
  }
  return action;
}

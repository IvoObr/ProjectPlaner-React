import {actionTypes} from "./actionTypes";

export const actions = {
  login: (user) => ({
    type: actionTypes.LOGIN_USER,
    payload: {user}
  }),
  loginSuccess: (user) => ({
    type: actionTypes.LOGIN_USER_SUCCESS,
    payload: {user}
  }),
  loginFailed: (user) => ({
    type: actionTypes.LOGIN_USER_FAILED,
    payload: {user}
  }),
  logout: (user) => ({
    type: actionTypes.LOGOUT_USER,
    payload: {user}
  }),
  logoutSuccess: (user) => ({
    type: actionTypes.LOGOUT_USER_SUCCESS,
    payload: {user}
  }),
  logoutFailed: (user) => ({
    type: actionTypes.LOGOUT_USER_FAILED,
    payload: {user}
  }),
  signup: (user) => ({
    type: actionTypes.SIGNUP_USER,
    payload: {user}
  }),
  signupSuccess: (user) => ({
    type: actionTypes.SIGNUP_USER_SUCCESS,
    payload: {user}
  }),
  signupFailed: (user) => ({
    type: actionTypes.SIGNUP_USER_FAILED,
    payload: {user}
  }),
};
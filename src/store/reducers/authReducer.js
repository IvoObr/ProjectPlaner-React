import {loop, Cmd} from "redux-loop";
import {actionTypes} from "../actions/actionTypes";
import {actions} from "../actions/authActions";
import {login, logout, signup} from "../../utils/authService";

let user = localStorage.getItem('user');
if (user) {
    user = JSON.parse(user);
}

const initState = user ? {loggedIn: true, user, loginError: ''} : {loggedIn: false};

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            return loop(
                {loggingIn: true, user: action.payload.user},
                Cmd.run(login,
                    {
                        successActionCreator: actions.loginSuccess,
                        failActionCreator: actions.loginFailed,
                        args: [action.payload.user]
                    })
            );
        case actionTypes.LOGIN_USER_SUCCESS:
            return loop(
                {loggingIn: false, loggedIn: true, user: action.payload.user.user, loginError: ''},
                Cmd.none
            );
        case actionTypes.LOGIN_USER_FAILED:
            return loop(
                {loggingIn: false, user: null, loginError: 'Login Error'},
                Cmd.none
            );
        case actionTypes.LOGOUT_USER:
            return loop(
                {},
                Cmd.run(logout,
                    {
                        successActionCreator: actions.logoutSuccess,
                        failActionCreator: actions.logoutFailed
                    })
            );
        case actionTypes.LOGOUT_USER_SUCCESS:
            return loop(
                {loggedIn: false},
                Cmd.none
            );
        case actionTypes.LOGOUT_USER_FAILED:
            return loop(
                {loggedIn: true, user: action.payload},
                Cmd.none
            );

        case actionTypes.SIGNUP_USER:
            return loop(
                {loggingIn: true, user: action.payload.user},
                Cmd.run(signup,
                    {
                        successActionCreator: actions.signupSuccess,
                        failActionCreator: actions.signupFailed,
                        args: [action.payload.user]
                    })
            );
        case actionTypes.SIGNUP_USER_SUCCESS:
            return loop(
                {loggingIn: false, loggedIn: true, user: action.payload.user.user},
                Cmd.none
            );
        case actionTypes.SIGNUP_USER_FAILED:
            const error =  action.payload.user.response.data.message || action.payload.user.response.data.errmsg
            console.log(error);
            return loop(
                {loggingIn: false, signUpError: error},
                Cmd.none
            );
        default:
            return state;
    }
};
import {loop, Cmd} from "redux-loop";
import {actionTypes} from "../actions/actionTypes";
import {actions} from "../actions/userActions";
import {login, logout, signup} from "../../utils/userService";

let user = localStorage.getItem('user');
if (user) {
    user = JSON.parse(user);
}

const initState = user ? {loggedIn: true, user} : {};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            console.log('LOGIN_USER', action.payload.user);
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
            console.log('LOGIN_USER_SUCCESS', action.payload.user);
            return loop(
                {loggedIn: true, user: action.payload.user},
                Cmd.none
            );
        case actionTypes.LOGIN_USER_FAILED:
            return loop(
                {},
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
                {},
                Cmd.none
            );
        case actionTypes.LOGOUT_USER_FAILED:
            console.log('LOGOUT_USER_FAILED', action.payload.user);
            return loop(
                {loggedIn: true, user: action.payload.user},
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
                {loggedIn: true, user: action.payload.user},
                Cmd.none
            );
        case actionTypes.SIGNUP_USER_FAILED:
            return loop(
                {},
                Cmd.none
            );
        default:
            return state;
    }
};

export default authReducer;
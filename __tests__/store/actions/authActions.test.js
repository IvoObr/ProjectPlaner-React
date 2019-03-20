import {actions} from '../../../src/store/actions/authActions';
import {actionTypes} from '../../../src/store/actions/actionTypes';
import React from 'react';

describe('authActons', () => {

    it('should call login', () => {
        expect(actions.login({})).toEqual(
            {
                type: actionTypes.LOGIN_USER,
                payload: {user: {}}
            })
    });

    it('should call loginSuccess', () => {
        expect(actions.loginSuccess({})).toEqual(
            {
                type: actionTypes.LOGIN_USER_SUCCESS,
                payload: {user: {}}
            })
    });

    it('should call loginFailed', () => {
        expect(actions.loginFailed({})).toEqual(
            {
                type: actionTypes.LOGIN_USER_FAILED,
                payload: {user: {}}
            })
    });

    it('should call logout', () => {
        expect(actions.logout({})).toEqual(
            {
                type: actionTypes.LOGOUT_USER,
                payload: {user: {}}
            })
    });

    it('should call logoutSuccess', () => {
        expect(actions.logoutSuccess({})).toEqual(
            {
                type: actionTypes.LOGOUT_USER_SUCCESS,
                payload: {user: {}}
            })
    });

    it('should call logoutFailed', () => {
        expect(actions.logoutFailed({})).toEqual(
            {
                type: actionTypes.LOGOUT_USER_FAILED,
                payload: {user: {}}
            })
    });

    it('should call signup', () => {
        expect(actions.signup({})).toEqual(
            {
                type: actionTypes.SIGNUP_USER,
                payload: {user: {}}
            })
    });

    it('should call signupSuccess', () => {
        expect(actions.signupSuccess({})).toEqual(
            {
                type: actionTypes.SIGNUP_USER_SUCCESS,
                payload: {user: {}}
            })
    });

    it('should call signupFailed', () => {
        expect(actions.signupFailed({})).toEqual(
            {
                type: actionTypes.SIGNUP_USER_FAILED,
                payload: {user: {}}
            })
    });
});

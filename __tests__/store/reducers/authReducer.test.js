import {authReducer} from '../../../src/store/reducers/authReducer';
import {mockStore} from '../../../src/utils/mockStore';
import {actions} from '../../../src/store/actions/authActions';

describe('authReducer', () => {
    
    it('LOGIN_USER is called', () => {
        let store = authReducer(mockStore.auth, actions.login({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('LOGIN_USER_SUCCESS is called', () => {
        let store = authReducer(mockStore.auth, actions.loginSuccess({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('LOGIN_USER_FAILED is called', () => {
        let store = authReducer(mockStore.auth, actions.loginFailed({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('LOGOUT_USER is called', () => {
        let store = authReducer(mockStore.auth, actions.logout({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('LOGOUT_USER_SUCCESS is called', () => {
        let store = authReducer(mockStore.auth, actions.logoutSuccess({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('LOGOUT_USER_FAILED is called', () => {
        let store = authReducer(mockStore.auth, actions.logoutFailed({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('SIGNUP_USER is called', () => {
        let store = authReducer(mockStore.auth, actions.signup({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('SIGNUP_USER_SUCCESS is called', () => {
        let store = authReducer(mockStore.auth, actions.signupSuccess({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('SIGNUP_USER_FAILED is called', () => {
        let error = {
            response: {
                data: {
                    message: '"$email_1 dup key"failed signup'
                }
            }
        };

        let store = authReducer(mockStore.auth, actions.signupFailed(error));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('should return default state', () => {
        let store = authReducer(mockStore.auth, {});
        expect(store).toBeDefined();
    });
});

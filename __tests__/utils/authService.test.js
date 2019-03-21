import {login, logout, signup} from "../../src/utils/authService";
import {mockStore} from '../../src/utils/mockStore';

describe('authService', () => {
    it('login is called', () => {
        let auth = login(mockStore.auth.user);
        expect(auth).toBeDefined();
    });

    it('logout is called', () => {
        let auth = logout(mockStore.auth.user);
        expect(auth).toBeDefined();
    });

    it('signup is called', () => {
        let auth = signup(mockStore.auth.user);
        expect(auth).toBeDefined();
    });
});


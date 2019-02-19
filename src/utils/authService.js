import axios from 'axios';
import url from './serviceConfing'

const saveTokenInSession = (response) => {
    const xAuth = response.request.getResponseHeader('x-auth');
    response.data.user.token = xAuth;
    localStorage.setItem('user', JSON.stringify(response.data.user));
};

export const login = (user) => {
    return axios.post(`${url}/users/login`, user).then(response => {
        saveTokenInSession(response);
        return response.data
    });
};

export const logout = () => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    const headers = {
        'x-auth': token || null
    };

    return axios.delete(`${url}/users/token`, {headers}).then(response => {
        localStorage.removeItem('user');
        return response.data
    });
};

export const signup = (user) => {
    return axios.post(`${url}/users`, user).then(response => {
        saveTokenInSession(response);
        return response.data
    });
};
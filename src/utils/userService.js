import axios from 'axios';

const url = 'http://localhost:3002';

export const login = (user) => {
    return axios.post(`${url}/users/login`, user).then(response => {
        const xAuth = response.request.getResponseHeader('x-auth');
        response.data.user.token = xAuth;
        localStorage.setItem('user', JSON.stringify(response.data.user));
        return response.data
    });
};

export const logout = (user) => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    const headers = {
        'x-auth': token || null
    };

    if (token) {
        return axios.delete(`${url}/users/token`, {headers, user}).then(response => {
            localStorage.removeItem('user');
            return response.data
        });
    }
};

export const signup = (user) => {
    return axios.post(`${url}/users`, user).then(response => response.data);
};
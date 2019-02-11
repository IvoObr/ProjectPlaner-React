import axios from 'axios';

const url = 'http://localhost:3002';
let user = JSON.parse(localStorage.getItem('user'));
const token = user && user.token;
const headers = {
    'x-auth': token || ''
};


export const login = (user) => {
    return axios.post(`${url}/users/login`, user).then(response => {
        const xAuth = response.request.getResponseHeader('x-auth');
        response.data.user.token = xAuth;
        localStorage.setItem('user', JSON.stringify(response.data.user));
        return response.data
    });
};

export const logout = (user) => {
    return axios.delete(`${url}/users/token`, {headers, user}).then(response => {
        localStorage.setItem('user', '');
        return response.data
    });
};

export const signup = (user) => {
    return axios.post(`${url}/users`, user).then(response => response.data);
};
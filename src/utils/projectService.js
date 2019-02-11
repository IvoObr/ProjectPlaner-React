import axios from 'axios';

const url = 'http://localhost:3002';
const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
const headers = {
    'x-auth': token || null
};

export const fetchProjects = () => {
    if (token) {
        return axios.get(`${url}/projects`, {headers}).then(response => response.data);
    }
};

export const createProject = (body) => {
    if (token) {
        return axios.post(`${url}/projects`, {headers, body}).then(response => response.data);
    }
};



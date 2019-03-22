import axios from 'axios';
import url from './axiosConfing'

const getToken = () => {
    return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
};

export const fetchProjects = () => {
    const headers = {
        'x-auth': getToken() || null
    };
    return axios.get(`${url}/projects`, {headers}).then(response => response.data);
};

export const createProject = (body) => {
    const headers = {
        'x-auth': getToken() || null
    };
    return axios.post(`${url}/projects`, body, {headers}).then(response => response.data);
};

export const getProject = (id) => {
    const headers = {
        'x-auth': getToken() || null
    };
    return axios.get(`${url}/projects/${id}`, {headers}).then(response => response.data);
};

export const deleteProject = (id) => {
    const headers = {
        'x-auth': getToken() || null
    };
    return axios.delete(`${url}/projects/${id}`, {headers}).then(response => response.data);
};

export const editProject = (id, body) => {
    const headers = {
        'x-auth': getToken() || null
    };
    return axios.patch(`${url}/projects/${id}`, body, {headers}).then(response => response.data);
};

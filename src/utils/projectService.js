import axios from 'axios';

const url = 'http://localhost:3002';

export const fetchProjects = () => {
    return axios.get(`${url}/projects`).then(response => response.data );
};

export const createProject = (body) => {
    return axios.post(`${url}/projects`, body).then(response => response.data);
};



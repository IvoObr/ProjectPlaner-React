import axios from 'axios';

const url = 'http://localhost:3002';

export const fetchProjects = () => axios.get(`${url}/projects`).then(response => response.data);
export const createProject = (body) => axios.post(`${url}/projects`, body).then(response => response.data);



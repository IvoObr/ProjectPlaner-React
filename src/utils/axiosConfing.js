import axios from 'axios';
import {store} from '../index';
import {actions} from '../store/actions/authActions';

axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (401 === error.response.status) {
        localStorage.removeItem('user');
        store.dispatch(actions.logout());
        return Promise.reject('Unauthorized');
    } else {
        return Promise.reject(error);
    }
});

export default 'https://project-planer-node-js.herokuapp.com';
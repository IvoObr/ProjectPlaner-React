import {url, requestObject, responseHandle} from '../fetchConfig'

export const createProject = (project) => {
    return(dispatch, getState) => {
        let bodyObj = {
            ...project,
        };

        requestObject.method =  'POST';
        requestObject.body = JSON.stringify(bodyObj)
        fetch(`${url}/projects`, requestObject)
            .then(response => {
                responseHandle(response, dispatch, 'CREATE_PROJECT');
            }).catch(error => {
            console.log(new Error(`Request rejected: ${error}`));
        });
    }
};

export const getProjects = () => {
    return(dispatch, getState) => {
        requestObject.method =  'GET';
        fetch(`${url}/projects`, requestObject)
            .then(response => {
                responseHandle(response, dispatch, 'GET_ALL_PROJECTS');
            }).catch(error => {
            console.log(new Error(`Request rejected: ${error}`));
        });
    }
};
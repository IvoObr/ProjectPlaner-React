import {url, requestObject} from '../fetchConfig'

export const createProject = (project) => {
    return(dispatch, getState) => {
        let bodyObj = {
            ...project,
        };

        requestObject.method =  "POST";
        requestObject.body = JSON.stringify(bodyObj)

        fetch(`${url}/projects`, requestObject)
            .then(response => {
                if (response.ok) {
                    console.log('Projects', response);
                    dispatch({type: 'CREATE_PROJECT', project});
                } else {
                    let error = {
                        status: response.status,
                        statusText: response.statusText
                    };

                    dispatch({type: 'CREATE_PROJECT_ERROR', error});
                    console.log(`Request rejected with status ${response.status} - ${response.statusText}`);

                }
            });
    }
};

export const getProjects = () => {
    return(dispatch, getState) => {
        requestObject.method =  "GET";

        fetch(`${url}/projects`, requestObject)
            .then(response => {
                if (response.ok) {
                    let projects;
                    response.json().then(res => {
                        projects = res.projectDoc;
                        console.log('GOT the Projects', projects);
                        dispatch({type: 'GET_PROJECTS', projects});
                    });
                } else {
                    let error = {
                        status: response.status,
                        statusText: response.statusText
                    };

                    dispatch({type: 'GET_PROJECTS_ERROR', error});
                    console.log(`Request rejected with status ${response.status} - ${response.statusText}`);

                }
            });
    }
};
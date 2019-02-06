export const createProject = (project) => {
    return(dispatch, getState) => {
        let bodyObj = {
            ...project,
        };

        let init = {
            method: "POST",
            mode: "cors",
           // credentials: 'include',
            headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify(bodyObj),
        };

        fetch('http://localhost:3002/projects', init)
        .then(response => {
            debugger
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
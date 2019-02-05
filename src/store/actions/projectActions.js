export const createProject = (project) => {
    return(dispatch, getState) => {
        // make async call to db
        let bodyObj = {
            ...project,
            authorFirstName: 'I',
            authorLastName: 'O'
        };

        let init = {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, cors, *same-origin
            headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify(bodyObj),
        };

        fetch('http://localhost:3000/projects', init)
        .then(response => {
            console.log('Projects', response);  
        });
        
        dispatch({type: 'CREATE_PROJECT', project});
    }
};
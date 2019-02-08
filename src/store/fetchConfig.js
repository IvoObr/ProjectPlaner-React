module.exports = {
    requestObject: {
        mode: "cors",
        // credentials: "same-origin",
        headers: {"Content-Type": "application/json",}
    },
    url : 'http://localhost:3002',
    responseHandle(response, dispatch, typeStr) {
        if (response.ok) {
            let projects;
            response.json().then(res => {
                projects = res.projectDoc;
                dispatch({type: typeStr, projects});
            });
        } else {
            let error = {
                status: response.status,
                statusText: response.statusText
            };

            dispatch({type: `${typeStr}_ERROR`, error});
        }

    }
};
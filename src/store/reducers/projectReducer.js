const initState = { projects: [] };

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            return {
                ...state,
                projects: [...state.projects, action.projects]
            };
        case 'CREATE_PROJECT_ERROR':
            console.log(`Request rejected: ${action.error.status} - ${action.error.statusText}`);
            return state;
        case 'GET_ALL_PROJECTS' :
            return {
                ...state,
                projects: [...action.projects]
            };
        case 'GET_ALL_PROJECTS_ERROR':
            console.log(`Request rejected: ${action.error.status} - ${action.error.statusText}`);
            return state;
        default:
            return state;
    }
};

export default projectReducer;
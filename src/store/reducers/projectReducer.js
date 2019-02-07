const initState = { projects: [] };

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return {
                ...state,
                projects: [...state.projects, action.project]
            };
        case 'CREATE_PROJECT_ERROR':
            console.log('created project Error', action.error.status, action.error.statusText);
            return state;
        case 'GET_PROJECTS' :
            console.log('got all projects', action.projects);
            return {
                ...state,
                projects: [...state.projects, ...action.projects]
            };
        default:
            return state;
    }
};

export default projectReducer;
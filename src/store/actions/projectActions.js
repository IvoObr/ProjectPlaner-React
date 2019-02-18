import {actionTypes} from "./actionTypes";

export const actions = {
    startFetchProject: () => ({
        type: actionTypes.START_FETCH_PROJECTS
    }),
    startFetchProjectSuccess: (data) => ({
        type: actionTypes.START_FETCH_PROJECTS_SUCCESS,
        payload: {data}
    }),
    startFetchProjectFailed: (error) => ({
        type: actionTypes.START_FETCH_PROJECTS_FAILED,
        payload: {error}
    }),

    createProject: (project) => ({
        type: actionTypes.CREATE_PROJECT,
        payload: {project}
    }),
    createProjectSuccess: (data) => ({
        type: actionTypes.CREATE_PROJECT_SUCCESS,
        payload: {data}
    }),
    createProjectFailed: (error) => ({
        type: actionTypes.CREATE_PROJECT_FAILED,
        payload: {error}
    }),

    getProject: (id) => ({
        type: actionTypes.GET_PROJECT,
        payload: {id}
    }),
    getProjectSuccess: (project) => ({
        type: actionTypes.GET_PROJECT_SUCCESS,
        payload: {project}
    }),
    getProjectFailed: (error) => ({
        type: actionTypes.GET_PROJECT_FAILED,
        payload: {error}
    }),

    deleteProject: (id) => ({
        type: actionTypes.DELETE_PROJECT,
        payload: {id}
    }),
    deleteProjectSuccess: (project) => ({
        type: actionTypes.DELETE_PROJECT_SUCCESS,
        payload: {project}
    }),
    deleteProjectFailed: (error) => ({
        type: actionTypes.DELETE_PROJECT_FAILED,
        payload: {error}
    }),


    editProject: (id, body) => ({
        type: actionTypes.EDIT_PROJECT,
        payload: {id, body}
    }),
    editProjectSuccess: (project) => ({
        type: actionTypes.EDIT_PROJECT_SUCCESS,
        payload: {project}
    }),
    editProjectFailed: (error) => ({
        type: actionTypes.EDIT_PROJECT_FAILED,
        payload: {error}
    }),
};

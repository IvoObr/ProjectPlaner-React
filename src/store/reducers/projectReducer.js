import {loop, Cmd} from 'redux-loop';
import {actions} from "../actions/projectActions";
import {fetchProjects, createProject, getProject, deleteProject, editProject} from "../../utils/projectService";
import {actionTypes} from "../actions/actionTypes";

const initState = {projects: [], isProjectCreated: false, isProjectSaved: false};

export const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case  actionTypes.START_FETCH_PROJECTS:
            return loop(
                {...state},
                Cmd.run(fetchProjects,
                    {
                        successActionCreator: actions.startFetchProjectSuccess,
                        failActionCreator: actions.startFetchProjectFailed
                    })
            );
        case actionTypes.START_FETCH_PROJECTS_SUCCESS:
            return loop(
                {...state, projects: action.payload.data.projectDoc, isProjectCreated: false, isProjectSaved: false},
                Cmd.none
            );
        case actionTypes.START_FETCH_PROJECTS_FAILED:
            return state;

        case actionTypes.CREATE_PROJECT:
            return loop(
                {...state},
                Cmd.run(createProject,
                    {
                        successActionCreator: actions.createProjectSuccess,
                        failActionCreator: actions.createProjectFailed,
                        args: [action.payload.project]
                    })
            );
        case actionTypes.CREATE_PROJECT_SUCCESS:
            return loop(
                {...state, projects: [...state.projects, action.payload.data.projectDoc], isProjectCreated: true, isProjectSaved: false},
                Cmd.none
            );
        case actionTypes.CREATE_PROJECT_FAILED:
            return state;
        case  actionTypes.GET_PROJECT:
            return loop(
                {...state},
                Cmd.run(getProject,
                    {
                        successActionCreator: actions.getProjectSuccess,
                        failActionCreator: actions.getProjectFailed,
                        args: [action.payload.id]
                    })
            );
        case actionTypes.GET_PROJECT_SUCCESS:
            return loop(
                {...state, projects: [action.payload.project.projectDoc]},
                Cmd.none
            );
        case actionTypes.GET_PROJECT_FAILED:
            return state;
        case  actionTypes.DELETE_PROJECT:
            return loop(
                {...state},
                Cmd.run(deleteProject,
                    {
                        successActionCreator: actions.deleteProjectSuccess,
                        failActionCreator: actions.deleteProjectFailed,
                        args: [action.payload.id]
                    })
            );
        case actionTypes.DELETE_PROJECT_SUCCESS:
            return loop(
                {...state, projects: [], isProjectSaved: false},
                Cmd.none
            );
        case actionTypes.DELETE_PROJECT_FAILED:
            return state;
        case  actionTypes.EDIT_PROJECT:
            return loop(
                {...state},
                Cmd.run(editProject,
                    {
                        successActionCreator: actions.editProjectSuccess,
                        failActionCreator: actions.editProjectFailed,
                        args: [action.payload.id, action.payload.body]
                    })
            );
        case actionTypes.EDIT_PROJECT_SUCCESS:
            console.log('EDITED PROJECT::: ', action.payload.project.projectDoc);
            return loop(
                {...state, projects: [action.payload.project.projectDoc], isProjectSaved: true},
                Cmd.none
            );
        case actionTypes.EDIT_PROJECT_FAILED:
            return state;
        default:
            return state;
    }
};
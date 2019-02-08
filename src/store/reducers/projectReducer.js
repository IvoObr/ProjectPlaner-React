import {loop, Cmd} from 'redux-loop';
import {actions} from "../actions/projectActions";
import {fetchProjects, createProject} from "../../utils/apiCalls";
import {actionTypes} from "../actions/actionTypes";

const initState = {projects: []};

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
                {...state, projects: action.payload.data.projectDoc},
                Cmd.none
            );
        case actionTypes.START_FETCH_PROJECTS_FAILED:
            //todo not found component
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
                {...state, projects: [...state.projects, action.payload.data.projectDoc]},
                Cmd.none
            );
        case actionTypes.CREATE_PROJECT_FAILED:
            //todo not found component or notificaiton
            return state;
        default:
            return state;
    }
};
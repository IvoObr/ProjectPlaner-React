import {actions} from '../../../src/store/actions/projectActions';
import {actionTypes} from '../../../src/store/actions/actionTypes';
import React from 'react';

describe('projectActions', () => {

    it('should call startFetchProject', () => {
        expect(actions.startFetchProject()).toEqual(
            {
                type: actionTypes.START_FETCH_PROJECTS
            })
    });

    it('should call startFetchProjectSuccess', () => {
        expect(actions.startFetchProjectSuccess({})).toEqual(
            {
                type: actionTypes.START_FETCH_PROJECTS_SUCCESS,
                payload: {data: {}}
            })
    });

    it('should call startFetchProjectFailed', () => {
        expect(actions.startFetchProjectFailed({})).toEqual(
            {
                type: actionTypes.START_FETCH_PROJECTS_FAILED,
                payload: {error: {}}
            })
    });

    it('should call createProject', () => {
        expect(actions.createProject({})).toEqual(
            {
                type: actionTypes.CREATE_PROJECT,
                payload: {project: {}}
            })
    });

    it('should call createProjectSuccess', () => {
        expect(actions.createProjectSuccess({})).toEqual(
            {
                type: actionTypes.CREATE_PROJECT_SUCCESS,
                payload: {data: {}}
            })
    });

    it('should call createProjectFailed', () => {
        expect(actions.createProjectFailed({})).toEqual(
            {
                type: actionTypes.CREATE_PROJECT_FAILED,
                payload: {error: {}}
            })
    });

    it('should call getProject', () => {
        expect(actions.getProject({})).toEqual(
            {
                type: actionTypes.GET_PROJECT,
                payload: {id: {}}
            })
    });

    it('should call getProjectSuccess', () => {
        expect(actions.getProjectSuccess({})).toEqual(
            {
                type: actionTypes.GET_PROJECT_SUCCESS,
                payload: {project: {}}
            })
    });

    it('should call getProjectFailed', () => {
        expect(actions.getProjectFailed({})).toEqual(
            {
                type: actionTypes.GET_PROJECT_FAILED,
                payload: {error: {}}
            })
    });

    it('should call getProjectFailed', () => {
        expect(actions.getProjectFailed({})).toEqual(
            {
                type: actionTypes.GET_PROJECT_FAILED,
                payload: {error: {}}
            })
    });

    it('should call deleteProject', () => {
        expect(actions.deleteProject({})).toEqual(
            {
                type: actionTypes.DELETE_PROJECT,
                payload: {id: {}}
            })
    });

    it('should call deleteProjectSuccess', () => {
        expect(actions.deleteProjectSuccess({})).toEqual(
            {
                type: actionTypes.DELETE_PROJECT_SUCCESS,
                payload: {project: {}}
            })
    });

    it('should call deleteProjectFailed', () => {
        expect(actions.deleteProjectFailed({})).toEqual(
            {
                type: actionTypes.DELETE_PROJECT_FAILED,
                payload: {error: {}}
            })
    });

    it('should call editProject', () => {
        expect(actions.editProject({}, {})).toEqual(
            {
                type: actionTypes.EDIT_PROJECT,
                payload: {id: {}, body: {}}
            })
    });

    it('should call editProjectSuccess', () => {
        expect(actions.editProjectSuccess({})).toEqual(
            {
                type: actionTypes.EDIT_PROJECT_SUCCESS,
                payload: {project: {}}
            })
    });

    it('should call editProjectFailed', () => {
        expect(actions.editProjectFailed({})).toEqual(
            {
                type: actionTypes.EDIT_PROJECT_FAILED,
                payload: {error: {}}
            })
    });
});

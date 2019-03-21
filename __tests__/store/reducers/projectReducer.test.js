import {projectReducer} from '../../../src/store/reducers/projectReducer';
import {mockStore} from '../../../src/utils/mockStore';
import {actions} from '../../../src/store/actions/projectActions';
import {authReducer} from '../../../src/store/reducers/authReducer';

describe('projectReducer', () => {

    it('START_FETCH_PROJECTS is called', () => {
        let store = projectReducer(mockStore.project, actions.startFetchProject({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('START_FETCH_PROJECTS_SUCCESS is called', () => {
        let store = projectReducer(mockStore.project, actions.startFetchProjectSuccess({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('START_FETCH_PROJECTS_FAILED is called', () => {
        let store = projectReducer(mockStore.project, actions.startFetchProjectFailed());
        expect(store).toBeDefined();
        expect(store.projects.length).toBeGreaterThan(1);
    });

    it('CREATE_PROJECT is called', () => {
        let store = projectReducer(mockStore.project, actions.createProject({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('CREATE_PROJECT_SUCCESS is called', () => {
        let store = projectReducer(mockStore.project, actions.createProjectSuccess([]));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('CREATE_PROJECT_FAILED is called', () => {
        let store = projectReducer(mockStore.project.projects, actions.createProjectFailed({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('GET_PROJECT is called', () => {
        let store = projectReducer(mockStore.project, actions.getProject({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('GET_PROJECT_SUCCESS is called', () => {
        let store = projectReducer(mockStore.project, actions.getProjectSuccess({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('GET_PROJECT_FAILED is called', () => {
        let store = projectReducer(mockStore.project.projects, actions.getProjectFailed({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('DELETE_PROJECT is called', () => {
        let store = projectReducer(mockStore.project.projects, actions.deleteProject({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('DELETE_PROJECT_SUCCESS is called', () => {
        let store = projectReducer(mockStore.project.projects, actions.deleteProjectSuccess({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('DELETE_PROJECT_FAILED is called', () => {
        let store = projectReducer(mockStore.project.projects, actions.deleteProjectFailed({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('EDIT_PROJECT is called', () => {
        let store = projectReducer(mockStore.project.projects, actions.editProject({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('EDIT_PROJECT_SUCCESS is called', () => {
        let store = projectReducer(mockStore.project.projects, actions.editProjectSuccess({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('EDIT_PROJECT_FAILED is called', () => {
        let store = projectReducer(mockStore.project.projects, actions.editProjectFailed({}));
        expect(store).toBeDefined();
        expect(store.length).toBeGreaterThan(1);
    });

    it('should return default state', () => {
        let store = projectReducer(mockStore.project, {});
        expect(store).toBeDefined();
    });
});



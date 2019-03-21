import {fetchProjects, createProject, getProject, deleteProject, editProject} from "../../src/utils/projectService";
import {mockStore} from '../../src/utils/mockStore';

describe('projectService', () => {
    it('fetchProjects is called', () => {
        let auth = fetchProjects(mockStore.project.projects);
        expect(auth).toBeDefined();
    });

    it('createProject is called', () => {
        let auth = createProject(mockStore.project.projects);
        expect(auth).toBeDefined();
    });

    it('getProject is called', () => {
        let auth = getProject(mockStore.project.projects);
        expect(auth).toBeDefined();
    });

    it('deleteProject is called', () => {
        let auth = deleteProject(mockStore.project.projects);
        expect(auth).toBeDefined();
    });

    it('editProject is called', () => {
        let auth = editProject(mockStore.project.projects);
        expect(auth).toBeDefined();
    });
});


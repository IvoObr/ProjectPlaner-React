import React from 'react';
import ProjectDetails from '../../../src/components/projects/ProjectDetails'
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import {mockStore} from '../../../src/utils/mockStore'
import {actions} from '../../../src/store/actions/projectActions';

configure({adapter: new Adapter()});

describe('<ProjectDetails/>', () => {
    let wrapper = null;
    let projectProps = null;
    let store = {};

    beforeEach(() => {
        store = configureStore(mockStore);

        projectProps = {
            match: {
                params: {
                    id: mockStore.project.projects[0]._id
                }
            },
            project: [mockStore.project.projects[0], mockStore.project.projects[0]],
            isProjectSaved: false,
            getProject: actions.getProject,
            deleteProject: actions.deleteProject,
            editProject: actions.editProject
        };

        wrapper = shallow(<ProjectDetails.WrappedComponent {...projectProps} store={store}/>);
    });

    it('should render NonEditableProject', () => {
        expect(wrapper.find('NonEditableProject').length).toBe(1);

    });

    it('should render EditableProject', () => {
        let event = {
            target: {
                id: 'title',
                value: 'test'
            }
        };

        let submitEvent = {
            preventDefault() {
                return true;
            }
        };

        wrapper.instance().makeEditable();
        wrapper.instance().deleteProject();
        wrapper.instance().handleChange(event);
        wrapper.instance().handleSubmit(submitEvent);
        expect(wrapper.find('EditableProject').length).toBe(1);

    });

    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });


    it('redirect if isProjectSaved = false', () => {
        projectProps.isProjectSaved = true;
        wrapper = shallow(<ProjectDetails.WrappedComponent {...projectProps} store={store}/>);
        expect(wrapper.find('Redirect').length).toBe(1);
    });

    it('redirect if there is no project', () => {
        projectProps.project = {};
        wrapper = shallow(<ProjectDetails.WrappedComponent {...projectProps} store={store}/>);
        expect(wrapper.find('Redirect').length).toBe(1);
    });
});

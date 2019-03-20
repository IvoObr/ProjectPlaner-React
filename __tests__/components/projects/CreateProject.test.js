import React from 'react';
import CreateProject from '../../../src/components/projects/CreateProject';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import {actions} from '../../../src/store/actions/projectActions';
import {mockStore} from '../../../src/utils/mockStore'

configure({adapter: new Adapter()});

describe('<CreateProject/>', () => {
    let wrapper = null;
    let props = null;
    let store = {};

    beforeEach(() => {
        store = configureStore(mockStore);
        props = {
            title: '',
            content: '',
            createProject: actions.createProject,
            isProjectCreated: false
        };

        wrapper = shallow(<CreateProject.WrappedComponent {...props} store={store}/>);
    });

    it('should render CreateProject', () => {
        expect(wrapper.find('div').length).toBe(4);
    });

    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('handleChange should work', () => {
        let event = {
            target: {
                id: 'title',
                value: 'test title'
            }
        };

        wrapper.instance().handleChange(event);
        let stateTitle = wrapper.state().title;
        expect(stateTitle).toBe('test title');
    });

    it('handleSubmit should work', () => {
        let event = {
            preventDefault() {
                return true;
            }
        };

        const throwError = wrapper.instance().handleSubmit(event);
        expect(throwError).toBeUndefined();
    });

    it('should redirect to Dashboard', () => {
       props.isProjectCreated = true;
       wrapper = shallow(<CreateProject.WrappedComponent {...props} store={store}/>);
       expect(wrapper.find('Redirect').length).toBe(1);
    });
});

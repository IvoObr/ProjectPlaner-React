import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../../../src/components/dashboard/Dashboard';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {actions} from '../../../src/store/actions/projectActions';
import {mockStore} from '../../../src/utils/mockStore';

configure({adapter: new Adapter()});

describe('<Dashboard/>', () => {
    let wrapper = null;
    let props = null;
    let store = {};

    beforeEach(() => {
        store = configureStore(mockStore);
        props = {
            projects: mockStore.project.projects,
            startFetchProject: actions.startFetchProject
        };

        wrapper = shallow(<Dashboard.WrappedComponent {...props} store={store}/>);
        wrapper.instance().componentDidMount();
    });

    it('should render SignedInLinks', () => {
        expect(wrapper.find('div').length).toBe(4);
    });

    it('should render SignedInLinks', () => {
        expect(wrapper.find('div').length).toBe(4);
    });

    it('should render empty Dashboard', () => {
        props.projects = [];
        wrapper = shallow(<Dashboard.WrappedComponent {...props} store={store}/>);
        expect(wrapper.find('h4').text()).toBe('Dashboard is empty widgets');
    });

    it('should fetch projects if projects are not array', () => {
        props.projects = {};
        wrapper = shallow(<Dashboard.WrappedComponent {...props} store={store}/>);
    });
});

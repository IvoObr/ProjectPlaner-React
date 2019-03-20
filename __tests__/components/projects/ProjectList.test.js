import React from 'react';
import ProjectList from '../../../src/components/projects/ProjectList'
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import {mockStore} from '../../../src/utils/mockStore'

configure({adapter: new Adapter()});

describe('<ProjectList/>', () => {
    let wrapper = null;
    let props = null;

    beforeEach(() => {
        props = {
            projects: mockStore.project.projects
        };

        wrapper = shallow(<ProjectList {...props}/>);
    });

    it('should render projects', () => {
        expect(wrapper.find('div').length).toBe(1);
        expect(wrapper.find('ProjectSummary').length).toBe(2);
    });

    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders empty dashboard', () => {
        props.projects = [];
        wrapper = shallow(<ProjectList {...props}/>);
        expect(wrapper.find('ProjectSummary').length).toBe(0);
    });

});

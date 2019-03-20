import React from 'react';
import ProjectSummary from '../../../src/components/projects/ProjectSummary'
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import {mockStore} from '../../../src/utils/mockStore'

configure({adapter: new Adapter()});

describe('<ProjectSummary/>', () => {
    let wrapper = null;
    let props = null;

    beforeEach(() => {
        props = {
            project: mockStore.project.projects[0]
        };

        wrapper = shallow(<ProjectSummary {...props}/>);
    });

    it('should render project', () => {
        expect(wrapper.find('span').length).toBe(1);
        expect(wrapper.find('p').length).toBe(2);
    });

    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

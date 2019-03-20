import React from 'react';
import NonEditableProject from '../../../src/components/projects/NonEditableProject'
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

describe('<NonEditableProject/>', () => {

    let props = null;
    let wrapper = null;

    beforeEach(() => {
        props = {
            handleSubmit: () => {},
            title: '',
            handleChange: () => {},
            content: '',
            deleteProject: () => {},
            makeEditable: () => {},
            project: '',
        };


        wrapper = shallow(<NonEditableProject {...props}/>);
    });

    it('should render NonEditableProject', () => {
        expect(wrapper.find('p').length).toBe(2);
        expect(wrapper.find('button').length).toBe(2);
    });

    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

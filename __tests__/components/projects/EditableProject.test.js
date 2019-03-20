import React from 'react';
import EditableProject from '../../../src/components/projects/EditableProject'
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

describe('<EditableProject/>', () => {

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


        wrapper = shallow(<EditableProject {...props}/>);
    });

    it('should render EditableProject', () => {
        expect(wrapper.find('textarea').length).toBe(2);
        expect(wrapper.find('button').length).toBe(3);
        expect(wrapper.find('form').length).toBe(1);
    });

    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

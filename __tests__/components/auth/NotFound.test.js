import React from 'react';
import ReactDOM from 'react-dom';
import {NotFound} from '../../../src/components/auth/NotFound';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

describe('<NotFound/>', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<NotFound/>);
    });

    it('should render NotFound', () => {
        expect(wrapper.find('div').length).toBe(2);
        expect(wrapper.find('h3').length).toBe(1);
    });

    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

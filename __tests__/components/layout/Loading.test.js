import React from 'react';
import Loading from '../../../src/components/layout/Loading';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

describe('<Loading/>', () => {
    let wrapper = null;
    let props = null;

    beforeEach(() => {
        props = {
            loggingIn: true
        };

        wrapper = shallow(<Loading {...props}/>);
    });

    it('should render Loading', () => {
        expect(wrapper.find('.progress').length).toBe(1);
    });

    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render empty Loading', () => {
        props.loggingIn = false;
        wrapper = shallow(<Loading {...props}/>);
        expect(wrapper.find('.height-25').length).toBe(1);
    });

});

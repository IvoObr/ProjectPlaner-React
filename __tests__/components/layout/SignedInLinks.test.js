import React from 'react';
import SignedInLinks from '../../../src/components/layout/SignedInLinks';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

describe('<SignedInLinks/>', () => {
    let wrapper = null;
    beforeEach(() => {
        wrapper = shallow(<SignedInLinks/>);
    });

    it('should render SignedInLinks', () => {
        expect(wrapper.find('ul').children().length).toBe(3);
    });

    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
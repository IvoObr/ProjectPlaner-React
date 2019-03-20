import React from 'react';
import SignedOutLinks from '../../../src/components/layout/SignedOutLinks';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

describe('<SignedOutLinks/>', () => {
    let wrapper = null;
    beforeEach(() => {
        wrapper = shallow(<SignedOutLinks/>);
    });

    it('should render SignedInLinks', () => {
        expect(wrapper.find('ul').children().length).toBe(2);
    });

    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
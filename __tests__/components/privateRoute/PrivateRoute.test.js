import React from 'react';
import PrivateRoute from '../../../src/components/privateRoute/PrivateRoute';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

describe('<PrivateRoute/>', () => {
    let wrapper = null;
    beforeEach(() => {
        wrapper = shallow(<PrivateRoute/>);
    });

    it('should render SignedInLinks', () => {
        expect(wrapper.find('Route').length).toBe(1);
    });

    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
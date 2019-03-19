import React from 'react';
import ReactDOM from 'react-dom';
import Notifications from '../../../src/components/auth/Notifications';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

describe('<Notifications/>', () => {
    let wrapper = null;
    let props = null;

    beforeEach(() => {
        props = {
            doShow: true,
            message: "testing with jest"
        };

        wrapper = shallow(<Notifications {...props}/>);
    });

    it('should render Notifications', () => {
        expect(wrapper.find('div').length).toBe(3);
        expect(wrapper.find('p').text()).toBe(props.message);
    });

    it('should not render Notifications', () => {
        wrapper.setProps({ doShow: false });
        expect(wrapper.find('div').length).toBe(0);
    });

    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from '../../../src/components/auth/SignIn';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

describe('<SignIn/>', () => {
    let wrapper = null;
    let props = null;

    beforeEach(() => {
        props = {
            login(arg) {
                return true;
            },
            isLoggedIn: false
        };

        wrapper = shallow(<SignIn.WrappedComponent {...props}/>);
    });

    it('should render SignIn', () => {
        expect(wrapper.find('div').length).toBe(4);
    });

    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('handleChange should work', () => {
        console.log(wrapper.debug());
        let event = {
            target: {
                id: 'email',
                value: 'test'
            }
        };

        const expectTrue = wrapper.instance().handleChange(event);
        console.log(expectTrue);
    });

    it('handleSubmit should work', () => {
        let event = {
            preventDefault() {
                return true;
            }
        };

        const expectTrue = wrapper.instance().handleSubmit(event);
        console.log(expectTrue);
    });

    it('should redirect if logged in redirect to Home', () => {
        props.isLoggedIn = true;
        wrapper = shallow(<SignIn.WrappedComponent {...props}/>);
        const expectTrue = wrapper.instance().render();
        console.log(expectTrue);
        console.log(wrapper.debug());
    });
});

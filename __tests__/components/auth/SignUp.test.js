import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from '../../../src/components/auth/SignUp';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import {actions} from '../../../src/store/actions/authActions';

configure({adapter: new Adapter()});

describe('<SignUp/>', () => {
    let wrapper = null;
    let props = null;
    let store = {};
    const mockStore = configureStore();

    const initialState = {
        auth: {
            loggedIn: true,
                user: {},
            loginError: ''
        },
        project: {}
    };

        beforeEach(() => {
            store = mockStore(initialState);
            props = {
                signup: actions.signup,
                isLoggedIn: false
            };

            wrapper = shallow(<SignUp.WrappedComponent {...props} store={store}/>);
    });

    it('should render SignUp', () => {
        expect(wrapper.find('div').length).toBe(6);
    });

    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('handleChange should work', () => {
        let event = {
            target: {
                id: 'email',
                value: 'test2'
            }
        };

        wrapper.instance().handleChange(event);
        let stateEmail = wrapper.state().email;
        expect(stateEmail).toBe('test2');
    });

    it('handleSubmit should work', () => {
        let event = {
            preventDefault() {
                return true;
            }
        };

        const throwError = wrapper.instance().handleSubmit(event);
        expect(throwError).toBeUndefined();
    });

    it('should redirect if logged in redirect to Home', () => {
        props.isLoggedIn = true;
        wrapper = shallow(<SignUp.WrappedComponent {...props}/>);
        expect(wrapper.find('Redirect').length).toBe(1);
    });
});

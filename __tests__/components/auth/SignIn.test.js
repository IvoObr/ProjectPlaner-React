import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from '../../../src/components/auth/SignIn';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import {actions} from '../../../src/store/actions/authActions';
import {mockStore} from '../../../src/utils/mockStore'

configure({adapter: new Adapter()});

describe('<SignIn/>', () => {
    let wrapper = null;
    let props = null;
    let store = {};

    beforeEach(() => {
        store = configureStore(mockStore);
        props = {
            login: actions.login,
            isLoggedIn: false
        };

        wrapper = shallow(<SignIn.WrappedComponent {...props} store={store}/>);
    });

    it('should render SignIn', () => {
        expect(wrapper.find('div').length).toBe(4);
    });

    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('handleChange should work', () => {
        let event = {
            target: {
                id: 'email',
                value: 'test'
            }
        };

        wrapper.instance().handleChange(event);
        let stateEmail = wrapper.state().email;
        expect(stateEmail).toBe('test');
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
        wrapper = shallow(<SignIn.WrappedComponent {...props}/>);
        expect(wrapper.find('Redirect').length).toBe(1);
    });
});

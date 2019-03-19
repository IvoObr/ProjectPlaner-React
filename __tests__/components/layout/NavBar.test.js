import React from 'react';
import NavBar from '../../../src/components/layout/NavBar';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import {mockStore} from '../../../src/utils/mockStore'

configure({adapter: new Adapter()});

describe('<NavBar/>', () => {
    let wrapper = null;
    let props = null;
    let store = {};

    beforeEach(() => {
        store = configureStore(mockStore);
        props = {
            isLoggedIn : mockStore.auth.loggedIn
        };

        wrapper = shallow(<NavBar.WrappedComponent {...props} store={store}/>);
    });

    it('should render SignedInLinks', () => {
        expect(wrapper.find('SignedInLinks').length).toBe(1);
    });

    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render SignedOutLinks', () => {
        props.isLoggedIn = false;
        wrapper = shallow(<NavBar.WrappedComponent {...props} store={store}/>)
        wrapper.instance().render();
        expect(wrapper.find('SignedOutLinks').length).toBe(1);
    });
});

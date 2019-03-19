import React from 'react';
import ReactDOM from 'react-dom';
import Logout from '../../../src/components/auth/Logout';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import {actions} from '../../../src/store/actions/authActions';

configure({adapter: new Adapter()});

describe('<Logout/>', () => {
    let wrapper = null;
    let props = {
        logout: actions.logout
    };

    beforeEach(() => {
        wrapper = shallow(<Logout.WrappedComponent {...props}/>);
        wrapper.instance().componentDidMount();
    });

    it('should render Logout', () => {
        expect(wrapper.find('Redirect').length).toBe(1);
        expect(wrapper.find('[to=\'/login\']').length).toBe(1);
    });

    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

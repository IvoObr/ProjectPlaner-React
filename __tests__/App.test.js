import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<App/>', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<App/>);  // , {context: {}, disableLifecycleMethods: bool}
    });

    it('should render App', () => {
        expect(wrapper.find('BrowserRouter').length).toBe(1);
    });

    it('should contain 1 div element with App class', () => {
        expect(wrapper.find('div').hasClass('App')).toBe(true);
    });

    it('switch should have 7 children', () => {
        expect(wrapper.find('Switch').children().length).toBe(8);
    });
});

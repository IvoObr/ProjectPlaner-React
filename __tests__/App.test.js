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

    // it('should contain 1 h1 element', () => {
    //     
    //     expect(wrapper.find('h1').length).toBe(1);
    // });
    //
    // it('should contain 1 test-jest class element', () => {
    //     
    //     expect(wrapper.find('.test-jest').exists()).toBe(true);
    // });
    //
    // it('ul should contain 3 li children', () => {
    //     
    //     expect(wrapper.find('ul').children().length).toBe(3);
    // });
    //
    // it('ol with class test-jest should exist', () => {
    //     
    //     expect(wrapper.find('ol').hasClass('test-jest-ul')).toBe(true);
    // });
    //
    // it('h1 should contain text "hi man"', () => {
    //     
    //     expect(wrapper.find('h1').text()).toBe('hi man');
    // });
});

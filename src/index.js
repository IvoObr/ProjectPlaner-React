import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "./store/reducers/rootReducer";
import {Provider} from 'react-redux'
import {install} from 'redux-loop';

// http://localhost:3000/?debug_session=session_string
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();

let user = localStorage.getItem('user');
if (user) {
    user = JSON.parse(user);
}

const authState = user ? {loggedIn: true, user, loginError: ''} : {loggedIn: false,  loginError: ''};

const initialState = {
    auth: authState,
    project: {projects: []}
};

export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(), install())
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
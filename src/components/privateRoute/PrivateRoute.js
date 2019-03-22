import React, {Component} from 'react';
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

class PrivateRoute extends Component {
    render() {
        const { component: Component, ...rest } = this.props;

        return (
            <Route {...rest}  render={(props) => {
                return this.props.isLoggedIn
                   ? <Component {...props} />
                   : <Redirect to={{pathname: '/login', state: {from: this.props.location }}}/>;
            }} />
        )
    }
};

const mapStateToProps = (state) => {
    if (state.length) state = {...state[0]};

    return {
        isLoggedIn: state.auth.loggedIn,
    }
};

export default connect(mapStateToProps)(PrivateRoute);
import React, {Component} from 'react';
import {actions} from "../../store/actions/authActions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Logout extends Component {
    componentDidMount() {
      this.props.logout();
    };

    render() {
            return (
                <Redirect to='/login'/>
            )
        }
}

const mapDispatchToProps = {
    logout: actions.logout
};

export default connect(null, mapDispatchToProps)(Logout);
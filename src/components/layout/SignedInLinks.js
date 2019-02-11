import React from 'react';
import {NavLink} from "react-router-dom";
import {actions} from "../../store/actions/userActions";
import {connect} from "react-redux";

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={props.logout}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating blue lighten-1'>IO</NavLink></li>

        </ul>
    )
};

const mapDispatchToProps = {
    logout: actions.logout
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
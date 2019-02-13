import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const SignedInLinks = (props) => {
    const initials = props.initials;
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/logout'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating blue lighten-1'>{initials}</NavLink></li>

        </ul>
    )
};

const mapStateToProps = (state) => {
    return {
        initials: state.auth.user.initials
    }
};

export default connect(mapStateToProps)(SignedInLinks);
import React from 'react';
import {NavLink} from "react-router-dom";

const SignedInLinks = () => {
    const initials = JSON.parse(localStorage.getItem('user')).initials;
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/logout'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating blue lighten-1'>{initials}</NavLink></li>
        </ul>
    )
};


export default SignedInLinks;
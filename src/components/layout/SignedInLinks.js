import React from 'react';
import {NavLink} from "react-router-dom";

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/logout'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating blue lighten-1'>IO</NavLink></li>

        </ul>
    )
};

export default SignedInLinks;
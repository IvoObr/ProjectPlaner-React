import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";


class NavBar extends Component {
    render() {
        const user = JSON.parse(localStorage.getItem('user'));
        const links = user ? <SignedInLinks user={user}/> : <SignedOutLinks/>;
        return (
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to='/' className='brand-logo'>Project Planer</Link>
                    {links}
                </div>
            </nav>
        )

    }
};

export default NavBar;
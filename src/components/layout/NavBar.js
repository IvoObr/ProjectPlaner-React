import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {connect} from "react-redux";

class NavBar extends Component {
    render() {
        const user = this.props.isLoggedIn || JSON.parse(localStorage.getItem('user'));
        const links = user ? <SignedInLinks/> : <SignedOutLinks/>;

        return (
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to='/' className='brand-logo'>Dashboard</Link>
                    {links}
                </div>
            </nav>
        )

    }
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.loggedIn,
    }
};

export default connect(mapStateToProps)(NavBar);
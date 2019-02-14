import React, {Component} from 'react';
import {actions} from "../../store/actions/authActions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signup(this.state);

    };

    render() {
        if (this.props.isLoggedIn) {
            return <Redirect to='/'/>
        }

        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id='firstName' onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id='lastName' onChange={this.handleChange}/>
                    </div>


                    <div className="input-field">
                        <button className="btn green lighten-1 z-depth-0">Sign Up</button>
                    </div>
                    {this.props.loggingIn ? <div className="progress"> <div className="indeterminate"></div> </div>
                        : <div className="height-18"></div>}
                    {this.props.signUpError ?  <div className='hideElement absolute center-align'>
                        <i className="material-icons center-align large">error_outline</i>
                        <p >{this.props.signUpError}</p>
                    </div>
                        : null}
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.loggedIn,
        loggingIn: state.auth.loggingIn,
        signUpError: state.auth.signUpError
    }
};

const mapDispatchToProps = {
    signup: actions.signup
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
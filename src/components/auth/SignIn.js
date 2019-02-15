import React, {Component} from 'react';
import {connect} from "react-redux";
import {actions} from "../../store/actions/authActions";
import {Redirect} from "react-router-dom";
import Notifications from "./Notifications";

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state);
    };

    render() {
        if (this.props.isLoggedIn) {
           return <Redirect to='/'/>
        }

        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className="grey-text text-darken-3">Login</h5>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <button className="btn green lighten-1 z-depth-0">Login</button>
                    </div>
                        {this.props.loggingIn ? <div className="progress"> <div className="indeterminate"></div> </div> : <div className="height-19"></div>}
                        <Notifications doShow={this.props.loginError} message={'Invalid username or password'}/>
                    </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
      return {
          isLoggedIn: state.auth.loggedIn,
          loginError: state.auth.loginError,
          loggingIn: state.auth.loggingIn,
      }
};

const mapDispatchToProps = {
    login: actions.login
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
import React, {Component} from 'react';
import {connect} from "react-redux";
import {actions} from "../../store/actions/userActions";

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
        console.log(this.state);
        this.props.login(this.state);
    };

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className="grey-text text-darken-3">Sign In</h5>

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
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    login: actions.login
};

export default connect(null, mapDispatchToProps)(SignIn);
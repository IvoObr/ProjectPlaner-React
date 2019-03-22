import React, {Component} from 'react';
import {connect} from "react-redux";
import {actions} from "../../store/actions/projectActions";
import {Redirect} from "react-router-dom";

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createProject(this.state);
    };

    render() {
        if (this.props.isProjectCreated) {
            return <Redirect to='/'/>
        }

        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className="grey-text text-darken-3">Create new project</h5>

                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id='title' onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id='content' onChange={this.handleChange} className='materialize-textarea'/>
                    </div>

                    <div className="input-field">
                        <button className="btn green lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    if (state.length) state = {...state[0]};

    return {
        isProjectCreated: state.project.isProjectCreated
    }
};

const mapDispatchToProps = {
    createProject: actions.createProject
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
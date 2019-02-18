import React, {Component} from 'react';
import {connect} from "react-redux";
import {actions} from "../../store/actions/projectActions";
import {Redirect} from 'react-router-dom';

class ProjectDetails extends Component {
    state = {
        title: '',
        content: ''
    };

    id = this.props.match.params.id;

    componentDidMount() {
        if (!this.props.id) {
            this.props.getProject(this.id);
        }

        if (this.props.project.length > 0) {
            let id2 = this.props.match.params.id;
            let project = this.props.project.filter(proj => {
                return proj._id === id2;
            });

            this.setState({
                title: project[0].title,
                content: project[0].content,
            })
        }
    };

    deleteProject = () => {
        this.props.deleteProject(this.id);
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.editProject(this.id, this.state);
    };

    render() {
        let project = this.props.project;
        project = (project.length > 0) ? project[0] : project;

        console.log(this.state);
        
        const projectDetails = <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <form onSubmit={this.handleSubmit} className='white'>
                        <input className="card-title" id='title' value={this.state.title} onChange={this.handleChange}/>
                        <input id='content' value={this.state.content} onChange={this.handleChange}/>
                        <div>
                            <button onClick={this.deleteProject}>Delete</button>
                            <button>Save Changes</button>
                        </div>
                    </form>
                </div>
                <div className="card-action grey-text">
                    <div>{project.authorFirstName} {project.authorLastName}</div>
                    <div className="grey-text">{project.createdAt}</div>
                </div>
            </div>
        </div>;

        return (project._id) ? projectDetails : <Redirect to='/'/>;
    }
};


const mapStateToProps = (state) => {
    return {
        project: state.project.projects
    }
};

const mapDispatchToProps = {
    getProject: actions.getProject,
    deleteProject: actions.deleteProject,
    editProject: actions.editProject
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
import React, {Component} from 'react';
import {connect} from "react-redux";
import {actions} from "../../store/actions/projectActions";
import {Redirect} from 'react-router-dom';
import EditableProject from './EditableProject';
import NonEditableProject from './NonEditableProject';

class ProjectDetails extends Component {
    state = {
        title: '',
        content: '',
        editable: false
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

    makeEditable = () => {
        this.setState({
            editable: !this.state.editable
        })
    };

    render() {
        let project = this.props.project;
        project = (project.length > 0) ? project[0] : project;

        if (this.props.isProjectSaved) {
            return <Redirect to='/'/>;
        }

        if (project._id) {
            if (this.state.editable) {
                return <EditableProject
                    handleSubmit={this.handleSubmit}
                    title={this.state.title} handleChange={this.handleChange}
                    content={this.state.content} deleteProject={this.deleteProject}
                    makeEditable={this.makeEditable} project={project}/>
            }
            return <NonEditableProject
                title={this.state.title} content={this.state.content}
                deleteProject={this.deleteProject}
                makeEditable={this.makeEditable} project={project}/>
        } else {
            return <Redirect to='/'/>;
        }
    }
};


const mapStateToProps = (state) => {
    return {
        project: state.project.projects,
        isProjectSaved: state.project.isProjectSaved
    }
};

const mapDispatchToProps = {
    getProject: actions.getProject,
    deleteProject: actions.deleteProject,
    editProject: actions.editProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
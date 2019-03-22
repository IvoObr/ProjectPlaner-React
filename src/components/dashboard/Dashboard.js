import React, {Component} from 'react';
import ProjectList from "../projects/ProjectList";
import {connect} from "react-redux";
import {actions} from "../../store/actions/projectActions";

class Dashboard extends Component {

    componentDidMount() {
        this.props.startFetchProject();
    }

    render() {
        const projects = this.props.projects;
        if (!Array.isArray(projects)) {
            this.props.startFetchProject();
        }

        if (projects.length < 1) {
             return (
                 <h4 className='fade-in-el white-text'>Dashboard is empty <i className="white-text material-icons line-height-left small">widgets</i></h4>
             )
        }

        return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    if (state.length) state = {...state[0]};

    return {
        projects: state.project.projects
    }
};

const mapDispatchToProps = {
    startFetchProject: actions.startFetchProject
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
import React, {Component} from 'react';
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import {connect} from "react-redux";
import {actions} from "../../store/actions/projectActions";

class Dashboard extends Component {

    componentDidMount() {
        this.props.startFetchProject();
    }

    render() {
        const {projects} = this.props;
        if (!Array.isArray(projects)) {
            this.props.startFetchProject();
        }

        return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
};

const mapDispatchToProps = {
    startFetchProject: actions.startFetchProject
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
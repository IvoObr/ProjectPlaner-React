import React, {Component} from 'react';
import {connect} from "react-redux";
import {actions} from "../../store/actions/projectActions";

class ProjectDetails extends Component {
       componentDidMount() {
           const id = this.props.match.params.id;
           if (!this.props.id) {
               this.props.getProject(id)
           }
       }

    render () {

        let project = this.props.project;
        project = (project.length > 0) ? project[0] : project;

         const projectDetails =  <div className="container section project-details">
             <div className="card z-depth-0">
                 <div className="card-content">
                     <span className="card-title">{project.title}</span>
                     <p>{project.content}</p>
                 </div>
                 <div className="card-action grey-text">
                     <div>{project.authorFirstName} {project.authorLastName}</div>
                     <div className="grey-text">{project.createdAt}</div>
                 </div>
             </div>
         </div>;

        const loading = <h1> Loading. Please wait...</h1>;

        return (project._id) ? projectDetails : loading;
      }
};


const mapStateToProps = (state) => {
    return {
        project: state.project.projects
    }
};

const mapDispatchToProps = {
  getProject: actions.getProject
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
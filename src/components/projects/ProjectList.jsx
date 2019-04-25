import React from 'react';
import ProjectSummary from "./ProjectSummary";
import {Link} from "react-router-dom";

const ProjectList = ({projects = []}) => {
    return (
        <div className="project-list section">
            {projects && projects.map(project => {
                return (
                    <Link to={'/project/' + project._id} key={project._id}>
                        <ProjectSummary project={project}/>
                    </Link>
                )
            })}
        </div>
    )
};

export default ProjectList;
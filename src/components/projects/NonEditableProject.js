import React from 'react';

const NonEditableProject = (props) => {
    const title = props.title;
    const content = props.content;
    const deleteProject = props.deleteProject;
    const makeEditable = props.makeEditable;
    const project = props.project;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <p className="card-title">{title}</p>
                    <p>{content}</p>
                    <div>
                        <button className="margin-10 btn green lighten-1 z-depth-0" onClick={deleteProject}>Delete</button>
                        <button className="margin-10 btn green lighten-1 z-depth-0" onClick={makeEditable}>Edit</button>
                    </div>
                </div>
                <div className="card-action grey-text">
                    <div>{project.authorFirstName} {project.authorLastName}</div>
                    <div className="grey-text">{project.createdAt}</div>
                </div>
            </div>
        </div>
    )
};

export default NonEditableProject;
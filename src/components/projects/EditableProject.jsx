import React from 'react';

const EditableProject = (props) => {
    const handleSubmit = props.handleSubmit;
    const title = props.title;
    const handleChange = props.handleChange;
    const content = props.content;
    const deleteProject = props.deleteProject;
    const makeEditable = props.makeEditable;
    const project = props.project;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <form onSubmit={handleSubmit} className='white'>
                        <textarea className="materialize-textarea card-title" id='title' value={title} onChange={handleChange}/>
                        <textarea className="materialize-textarea min-height" id='content' value={content} onChange={handleChange}/>
                        <div>
                            <button className="margin-10 btn green lighten-1 z-depth-0" onClick={deleteProject}>Delete</button>
                            <button className="margin-10 btn green lighten-1 z-depth-0" onClick={makeEditable}>Edit</button>
                            <button className="margin-10 btn green lighten-1 z-depth-0">Save Changes</button>
                        </div>
                    </form>
                </div>
                <div className="card-action grey-text">
                    <div>{project.authorFirstName} {project.authorLastName}</div>
                    <div className="grey-text">{project.createdAt}</div>
                </div>
            </div>
        </div>
    )
};

export default EditableProject;
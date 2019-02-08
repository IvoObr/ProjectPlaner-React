import React from 'react';
import {connect} from "react-redux";

const ProjectDetails = (props) => {
    console.log(props);
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{props.title}</span>
                    <p>{props.content}</p>
                </div>
                <div className="card-action grey-text">
                    <div>{props.authorFirstName} {props.authorLastName}</div>
                    <div className="grey-text">{props.createdAt}</div>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = (state, ownProps) => {
    return state.project.projects.find(proj => {
        return proj._id === ownProps.match.params.id;
    });
};

export default connect(mapStateToProps)(ProjectDetails);
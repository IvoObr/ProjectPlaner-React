import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
           <div className="card z-depth-0">
               <div className="card-content">
                   <span className="card-title">Project Title - {id} </span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, beatae commodi consectetur
                       delectus deleniti dolores doloribus eius eos exercitationem fugiat impedit modi molestiae nemo
                       nesciunt odit perferendis sequi vero! Impedit.</p>
               </div>
                 <div className="card-action grey-text">
                     <div>Posted by IvoO</div>
                     <div className="grey-text">Today Date</div>
                 </div>
           </div>
        </div>
    );
};

export default ProjectDetails;
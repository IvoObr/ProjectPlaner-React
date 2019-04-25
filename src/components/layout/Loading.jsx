import React from 'react';

const Loading = (props) => {
    const loggingIn = props.loggingIn;
    return (
        <div>
            {loggingIn ? <div className="progress">
                <div className="indeterminate"/>
            </div> : <div className="height-25"/>}
        </div>
    )
};

export default Loading;


import React from 'react';

const Notifications = (props) => {
    const doShow = props.doShow;
    const message = props.message;
    return (
        (doShow) ?
            <div className=' absolute hideElement center-align'>
                <div className='left-float '>
                    <i className="white-text material-icons line-height-left large">error_outline</i>
                </div>
                <div className='right-float'>
                    <p className='line-height-right'>{message}</p>
                </div>
            </div>
        : null
    )
};

export default Notifications;
import React from 'react';
import './LoadMoreBtn.css';
import propTypes from 'prop-types';

const LoadMoreBtn = (props) => {
    return (
        <div className="rmdb-loadmorebtn" onClick={props.onClick}> 
            <p>{props.text}</p>
        </div>
    )
}

LoadMoreBtn.propTypes = {
    text: propTypes.string
}

export default LoadMoreBtn;
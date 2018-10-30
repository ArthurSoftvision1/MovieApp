import React from 'react';
import './HeroImage.css';
import propTypes from 'prop-types';

const HeroImage = (props) => {
   
    return (
        <div className="rmdb-heroimage">
            <div className="rmdb-heroimage-content"> 
                <div className="rmdb-heroimage-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div>
            </div>

        </div>
    )
}

HeroImage.propTypes = {
    title: propTypes.string,
    text: propTypes.string
}

export default HeroImage;
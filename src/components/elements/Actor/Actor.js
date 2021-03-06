import React from 'react';
import { IMAGE_BASE_URL } from '../../../config';
import './Actor.css';
import propTypes from 'prop-types';

const Actor = (props) => {

    const POSTER_SIZE = 'W154';

    return (
        <div className="rmdb-actor">
            <img 
            src={props.actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${props.actor.profile_path}` : './images/no_image.jpg'}
            alt="actorthumb"/>
            <span className="rmdb-actor-name">{props.actor.name}</span>
            <span className="rmdb-actor-character">{props.actor.character}</span>
        </div>
    )
}

Actor.propTypes = {
    name: propTypes.string,
    character: propTypes.image,
    profile_path: propTypes.string
}

export default Actor;
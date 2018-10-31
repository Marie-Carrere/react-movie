import React from 'react';
import './MovieThumb.css';

const MovieThumb = (props) => {
    return(
        <div>
            <div className="rmdb-moviethumb">
                <img src={props.image} alt="moviethumb"/>
            </div>
        </div>
    );
}

export default MovieThumb;
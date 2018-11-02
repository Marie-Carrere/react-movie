import React from 'react';
import { Link } from 'react-router-dom';
import './MovieThumb.css';

const MovieThumb = (props) => {
    return(
        <div>
            <div className="rmdb-moviethumb">
                {props.clickable ?
                <Link to={{ pathname: `/${props.movieID}`, movieName: `${props.movieName}` }}>
                    <img src={props.image} alt="moviethumb" />
                </Link>
                :
                <img src={props.image} alt="moviethumb" />
                }

            </div>
        </div>
    );
}

export default MovieThumb;
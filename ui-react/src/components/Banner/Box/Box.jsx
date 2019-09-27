import React from 'react';
import { Link } from 'react-scroll';
import './Box.css';

const Box = props => {
    return (
        <div className={`box ${props.title.replace(' ', '-')}`}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <Link
                to={props.title.replace('web ', '')}
                duration={750}
                smooth={true}
            >
                <button>Read more</button>
            </Link>
        </div>
    )
}

export default Box;
import React from 'react';
import './Box.css';

const Box = props => {
    return (
        <div className={`box ${props.title.replace(' ', '-')}`}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button>Read more</button>
        </div>
    )
}

export default Box;
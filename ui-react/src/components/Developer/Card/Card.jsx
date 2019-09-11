import React from 'react';
import './Card.css';

import developerImg from '../../../images/developer-card/code.png';
import personImg from '../../../images/developer-card/person.png';

const Card = () => {
    const icons = [
        {
            text: 'developer',
            href: developerImg
        },
        {
            text: 'personal',
            href: personImg
        }
    ];

    return (
        <div className="card">
            <div className="icon-menu">
                {icons.map(icon => {
                    return (
                        <div key={icon.text} className="icon-container">
                            <img src={icon.href} alt={icon.text} />
                            <p>{icon.text}</p>
                        </div>
                    );
                })}
            </div>
            <div className="content-display">

            </div>
        </div>
    )
}

export default Card;
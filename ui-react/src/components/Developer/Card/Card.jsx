import React, { useState } from 'react';
import './Card.css';

import developerImg from '../../../images/developer-card/code.png';
import personImg from '../../../images/developer-card/person.png';
import portfolioImg from '../../../images/developer-card/portfolio.png';
import contactImg from '../../../images/developer-card/contact.png';

const Card = () => {
    const [currentPage, setCurrentPage] = useState('developer');

    const pages = [
        {
            title: 'developer',
            content: <p>Josse is a full stack developer who works primarily with JavaScript, HTML and CSS (including frameworks React and Vue), NodeJS and PostgreSQL. Besides that, he is in the process of learning Golang.</p>,
            img: developerImg
        },
        {
            title: 'personal',
            content: (
                <ul>
                    <li><b>Name:</b> Josse Cottenier</li>
                    <li><b>Age:</b> {Math.abs(new Date(Date.now() - new Date(2003, 13, 10)).getUTCFullYear() - 1970)}</li>
                    <li><b>Profession:</b> Student</li>
                    <li><b>Field of study:</b> Latin and ancient Greek</li>
                    <li><b>Hobbies:</b> Music (piano and singing), programming</li>
                </ul>
            ),
            img: personImg
        },
        {
            title: 'portfolio',
            img: portfolioImg
        },
        {
            title: 'contact',
            img: contactImg
        }
    ];

    return (
        <div className="card">
            <div className="icon-menu">
                {pages.map(page => {
                    return (
                        <div
                            key={page.title}
                            className={`icon-container ${page.title === currentPage ? 'active' : ''}`}
                            onClick={() => setCurrentPage(page.title)}
                        >
                            <img src={page.img} alt={page.title} />
                            <p>{page.title}</p>
                        </div>
                    );
                })}
            </div>
            <div className="content-display">
                {pages.map(page => {
                    return page.title === currentPage && (
                        <>
                            <h1>{page.title}</h1>
                            {page.content}
                        </>
                    );
                })}
            </div>
        </div>
    )
}

export default Card;
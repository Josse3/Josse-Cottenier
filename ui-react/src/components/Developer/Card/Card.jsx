import React, { Fragment, useState } from 'react';
import './Card.css';

import developerImg from '../../../images/developer-card/code.png';
import personImg from '../../../images/developer-card/person.png';
import portfolioImg from '../../../images/developer-card/portfolio.png';
import contactImg from '../../../images/developer-card/contact.png';

import personalImg from '../../../images/personal-image.webp';

import './SkillChartItem/SkillChartItem';
import SkillChartItem from './SkillChartItem/SkillChartItem';

const Card = () => {
    const [currentPage, setCurrentPage] = useState('developer');

    const skillChart = [
        {
            title: 'HTML',
            years: 4
        },
        {
            title: 'CSS',
            years: 4
        },
        {
            title: 'JavaScript',
            years: 1
        },
        {
            title: 'React',
            years: 1
        },
        {
            title: 'PostgreSQL',
            years: 1
        },
        {
            title: 'Vue',
            years: .5
        },
        {
            title: 'Flutter',
            years: .5
        }
    ]

    const pages = [
        {
            title: 'developer',
            content: (
                <>
                    Josse is a full stack developer who works primarily with JavaScript, HTML and CSS (including frameworks React and Vue), NodeJS and PostgreSQL. Besides that, he is in the process of learning app development using the framework Flutter.
                    <h2>Skill Chart</h2>
                    <div className="skill-chart">
                        {skillChart.map(item => {
                            return <SkillChartItem title={item.title} years={item.years} />
                        })}
                    </div>
                </>
            ),
            img: developerImg
        },
        {
            title: 'personal',
            content: (
                <>
                    <img src={personalImg} alt="A picture of Josse" className="personal-image" />
                    <ul>
                        <li><b>Name:</b> Josse Cottenier</li>
                        <li><b>Age:</b> {Math.abs(new Date(Date.now() - new Date(2003, 13, 10)).getUTCFullYear() - 1970)}</li>
                        <li><b>Profession:</b> Student</li>
                        <li><b>Curriculum:</b> Latin and ancient Greek</li>
                        <li><b>Hobbies:</b> Music (piano and singing), programming</li>
                    </ul>
                </>
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
                        <Fragment key={page.title}>
                            <h1>{page.title}</h1>
                            {page.content}
                        </Fragment>
                    );
                })}
            </div>
        </div>
    )
}

export default Card;
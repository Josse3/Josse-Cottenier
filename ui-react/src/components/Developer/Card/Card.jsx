import React, { Fragment, useState, useRef } from 'react';
import './Card.css';

import developerImg from '../../../images/developer-card/code.png';
import personImg from '../../../images/developer-card/person.png';
import portfolioImg from '../../../images/developer-card/portfolio.png';
import contactImg from '../../../images/developer-card/contact.png';

import personalImg from '../../../images/personal-image.webp';

import './SkillChartItem/SkillChartItem';
import SkillChartItem from './SkillChartItem/SkillChartItem';

import Recaptcha from 'react-recaptcha';

const Card = () => {
    const [currentPage, setCurrentPage] = useState('developer');

    // Contact form
    const contactFormInput = {
        firstName: useRef(null),
        lastName: useRef(null),
        email: useRef(null),
        message: useRef(null)
    }
    const [successfulCaptcha, setSucessfulCaptcha] = useState(false);
    const [contactFormError, setContactFormError] = useState('');
    const [messageSent, setMessageSent] = useState(false);

    const handleContactFormSubmit = event => {
        event.preventDefault();
        // Resetting error
        setContactFormError('');
        const formValue = {};
        Object.entries(contactFormInput).forEach(entry => formValue[entry[0]] = entry[1].current.value);
        const obligedFields = ['firstName', 'lastName', 'message'];
        if (!obligedFields.every(key => formValue[key] ? true : false)) {
            return setContactFormError('Please fill in the 3 obliged fields');
        }
        if (!successfulCaptcha) {
            return setContactFormError('Please fill in the CAPTCHA.');
        }

        const queryString = Object.entries(formValue).map(obj => obj[0] + '=' + encodeURIComponent(obj[1])).join('&');

        fetch(`/contactform/?${queryString}`, { method: 'POST' })
            .then(response => {
                if (!response.ok) throw Error('Failed submitting contact form, please try again later.');
            })
            .catch(console.error);

        setMessageSent(true);
    }

    const handleContactFormCaptcha = token => {
        fetch(`/captcha/${token}`)
            .then(response => {
                if (!response.ok) throw Error('Error verifying user');
                return response.json();
            })
            .then(jsonResponse => {
                setSucessfulCaptcha(jsonResponse);
            });
    };

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
                            return <SkillChartItem title={item.title} years={item.years} key={item.title} />
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
                    <img src={personalImg} alt="Josse Cottenier" className="personal-image" />
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
            content: (
                <>
                    <form onSubmit={handleContactFormSubmit}>
                        <div>
                            <input
                                type="text"
                                placeholder="First name"
                                ref={contactFormInput.firstName}
                            />

                            <input
                                type="text"
                                placeholder="Last name"
                                ref={contactFormInput.lastName}
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="E-mail (optional)"
                            ref={contactFormInput.email}
                        />

                        <textarea
                            placeholder="Message"
                            ref={contactFormInput.message}
                        />

                        <Recaptcha
                            sitekey="6LdTgq0UAAAAABcYBgXNESbAPAfTgL_PbEBuCCOP"
                            render="explicit"
                            verifyCallback={handleContactFormCaptcha}
                        />

                        <input type="submit" value="Submit message" />

                        {contactFormError && <div className="error">{contactFormError}</div>}

                        {messageSent && <div className="success-message">Thank you for submitting the form! I will reach out to you as soon as possible.</div>}
                    </form>
                </>
            ),
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
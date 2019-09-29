import React from 'react';
import './Banner.css';

import { Link } from 'react-scroll';

import Title from './Title/Title';

const Banner = () => {
    return (
        <div className="banner">
            <Title />
            <div>
                <h1>Full stack developer using (NodeJS, React/Vue/Svelte, PostgreSQL), and app developer using Flutter.<br /> Passionate about music, programming and computer technology.</h1>
                <Link
                    to="developer"
                    duration={500}
                    smooth={true}
                >
                    <button>Read more</button>
                </Link>
            </div>
        </div>
    )
}

export default Banner;
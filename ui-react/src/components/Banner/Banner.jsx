import React from 'react';
import './Banner.css';

import Title from './Title/Title';
import Box from './Box/Box';

const Banner = () => {
    return (
        <div className="banner">
            <Title />
            <Box
                title="musician"
                description="Since quite some time Josse is both a singer and piano player. He is passionate about ancient music, and spends a lot of his time listening to it. Besides that he is also taking courses in making music in group and composing."
            />
            <Box
                title="web developer"
                description="Josse is a full stack developer using NodeJS, frameworks like React, Vue and Svelte, and PostgreSQL. He is also in the process of learning Flutter and developing mobile apps. Overall, he shares a passion about anything that has todo with either app or website development and computer technology."
            />
        </div>
    )
}

export default Banner;
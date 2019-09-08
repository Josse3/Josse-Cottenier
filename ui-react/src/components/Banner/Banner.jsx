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
                description="When at home, Josse can be found daily behind his piano. Besides, when you see him around, he might very well be singing. He also played other instruments in the past."
            />
            <Box
                title="web developer"
                description="When behind his desk (which is quite often, frankly) Josse will without any doubt be designing various types of websites and programs."
            />
        </div>
    )
}

export default Banner;
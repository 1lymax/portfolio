import React from 'react';
import Portrait from "../Portrait";

import './About.scss'
import {TypeAnimation} from "react-type-animation";

const About = () => {

    return (
        <div className="about-wrapper" id="about">
            <div className="content-wrapper">

                <div className="about-name noselect">
                    My name is Maxim Lysogorov.
                </div>

                <TypeAnimation
                    className="about-header noselect"
                    speed={25}
                    deletionSpeed={30}
                    sequence={[
                        3000,
                        'I\'m a frontend',
                        800, // Waits 1s
                        'I\'m a web develloper?',
                        1000,
                        'I\'m a web developer.',
                        () => {// Place optional callbacks anywhere in the array
                        }
                    ]}
                    wrapper="div"
                    cursor={true}
                />
                <div className="about-description noselect">
                    My story have began in 1994...<br/>
                    First computer with Dx-2 66Mhz processor have become to me when I was fourteen.
                    First database on QBasic... MS-Dos and Multimedia... :) <br/>
                    Now I have more than 20 years of working experience in IT-industry. 2+ years of developing web applications in different
                    languages and stacks.
                </div>
            </div>
            <Portrait/>
        </div>
    );
};

export default About;
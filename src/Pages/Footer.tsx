import React from 'react';

import './Footer.scss'

const Footer = () => {
    return (
        <section>
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <ul>
                <li><a href="/"><i className="fa-brands fa-youtube"></i></a></li>
                <li><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="/"><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href="/"><i className="fa-brands fa-github"></i></a></li>
                <li><a href="/"><i className="fa-brands fa-quora"></i></a></li>
            </ul>
        </section>
    );
};

export default Footer;
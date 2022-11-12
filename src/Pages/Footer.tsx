import React from 'react';

import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <ul className="sci">
                <li><a href="/"><i className="fa-brands fa-youtube"></i></a></li>
                <li><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="/"><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href="/"><i className="fa-brands fa-github"></i></a></li>
                <li><a href="/"><i className="fa-brands fa-quora"></i></a></li>
            </ul>
        </div>
    );
};

export default Footer;
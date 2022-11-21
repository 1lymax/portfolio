import React from 'react';

import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer" id="contacts">
            <ul className="sci">
                {/*<li><a href="/src/Pages"><i className="fa-brands fa-youtube"></i></a></li>*/}
                <li>
                    <a target="_blank" rel="noreferrer" href="/src/Pages">
                    <i className="fa-brands fa-telegram"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mlysogorov/">
                        <i className="fa-brands fa-linkedin"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/1lymax">
                    <i className="fa-brands fa-github"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="mailto:m.lysogorov@gmail.com">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
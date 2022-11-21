import React from 'react';

import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <input className="switch" type="checkbox" id="switcher"/>
            <label htmlFor="switcher" className="open">
                <i className="fa-solid fa-bars"></i>
            </label>
            <nav>
                <ul className="menu">
                    <li style={{"--i": 5, "--j": 1} as React.CSSProperties}><a href="#about">About me</a></li>
                    <li style={{"--i": 4, "--j": 2} as React.CSSProperties}><a href="#portfolio">Portfolio</a></li>
                    <li style={{"--i": 3, "--j": 3} as React.CSSProperties}><a href="#skills">Skills</a></li>
                    <li style={{"--i": 2, "--j": 4} as React.CSSProperties}><a href="#contacts">Contacts</a></li>
                    <li style={{"--i": 1, "--j": 5} as React.CSSProperties}>
                        <a href="/Lysogorov_Maxim_CV.pdf" target="_blank" type="application/pdf">CV</a>
                    </li>
                </ul>
                <label htmlFor="switcher" className="close"><i className="fa-solid fa-xmark"></i></label>
            </nav>
        </div>
    );
};

export default Header;
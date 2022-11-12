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
                    <li style={{"--i": 4, "--j": 1} as React.CSSProperties}><a href="/">About me</a></li>
                    <li style={{"--i": 3, "--j": 2} as React.CSSProperties}><a href="/">Portfolio</a></li>
                    <li style={{"--i": 2, "--j": 3} as React.CSSProperties}><a href="/">Skills</a></li>
                    <li style={{"--i": 1, "--j": 4} as React.CSSProperties}><a href="/">Contacts</a></li>
                </ul>
                <label htmlFor="switcher" className="close"><i className="fa-solid fa-xmark"></i></label>
            </nav>
        </div>
    );
};

export default Header;

import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="logo">Greenify</div>
            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <a href="#Hero" onClick={toggleMenu}>Home</a>
                <a href="#AboutUs" onClick={toggleMenu}>About</a>
                <a href="#Work" onClick={toggleMenu}>How it works</a>
                <a href="#Collect" onClick={toggleMenu}>What we collect</a>
                <a href="#Contact" onClick={toggleMenu}>Contact</a>
            </nav>
        </header>
    );
};

export default Header;

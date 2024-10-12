import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import MyImageSvg from '../assets/logo-final-removebg-preview 2.svg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [aboutDropdown, setAboutDropdown] = useState(false);
    const [workDropdown, setWorkDropdown] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

        // Close dropdowns when closing the main menu
        if (isOpen) {
            setAboutDropdown(false);
            setWorkDropdown(false);
        }
    };

    const toggleAboutDropdown = () => {
        setAboutDropdown(!aboutDropdown);
    };

    const toggleWorkDropdown = () => {
        setWorkDropdown(!workDropdown);
    };

    return (
        <header className="header">
            <div className="logo">
                <img src={MyImageSvg} alt="logo" className="symbol" />
                <div className='logo_text'>Greenify</div>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <Link to="/" onClick={toggleMenu}>Home</Link>

                {/* About Dropdown */}
                <div className="dropdown">
                    <a onClick={toggleAboutDropdown}>
                        About
                    </a>
                    {aboutDropdown && (
                        <div className="dropdown-content">
                            <br />
                            <Link to="/OurApproach" onClick={toggleMenu}>Our Approch</Link>
                            <Link to="/team" onClick={toggleMenu}>Our Team</Link>
                            <br />
                        </div>
                    )}
                </div>

                {/* How It Works Dropdown */}
                <div className="dropdown">
                    <a onClick={toggleWorkDropdown}>
                        How it works
                    </a>
                    {workDropdown && (
                        <div className="dropdown-content">
                            <br />
                            <Link to="/HowToPack" onClick={toggleMenu}>How To Pack</Link>
                            <Link to="/Recycle" onClick={toggleMenu}>What Happens to my Recycling</Link>
                            <Link to="/Process" onClick={toggleMenu}>Process of Recycling</Link>
                            <br />
                        </div>
                    )}
                </div>

                <a href="#Collect">What we Collect</a>
                <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
            </nav>
        </header>
    );
};

export default Header;

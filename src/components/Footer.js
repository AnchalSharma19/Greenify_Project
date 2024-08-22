
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="newsletter-container">
            <div className="newsletter-subscribe">
                <h2>Subscribe to our Newsletter</h2>
                <form className="subscribe-form">
                    <input type="text" placeholder="First name" className="input-field" />
                    <input type="email" placeholder="Email address" className="input-field" />
                    <button type="submit" className="subscribe-button">Subscribe Now</button>
                </form>
            </div>
        </div>
    );
};

export default Footer;

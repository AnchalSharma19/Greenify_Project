import React from 'react';
import './AboutUs.css';
import aboutus from '../images/aboutus.png';

const AboutUs = () => {
    return (
        <div id="AboutUs" className="about-us-container">
            <div className="about-us-image">
                <img src={aboutus} alt="About Us" />
            </div>
            <div className="about-us-content">
                <h2>Who we are?</h2>
                <p>
                    Welcome to <span className='greenify'>Greenify!</span> We are committed to making recycling easy and efficient for everyone.
                    Our service ensures that recyclable products are collected directly from your doorstep and
                    delivered to recycling companies. Join us in our mission to make the planet greener, one item at a time.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;

import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div id="AboutUs" className="about-us-container">
            <div className="about-us-image">
                <img src="https://img.freepik.com/free-photo/front-view-individual-holding-recycle-produts_23-2148666774.jpg?t=st=1724246296~exp=1724249896~hmac=2e3bef59d9a15ad62a07321d42a038ac1e236e6d9c5b1b687d2dba50f3fd113d&w=1800" alt="About Us" />
            </div>
            <div className="about-us-content">
                <h2>About Us</h2>
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

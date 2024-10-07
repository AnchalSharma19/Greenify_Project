import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div id="AboutUs" className="about-us-container">
            <div className="about-us-image">
                <img src="https://img.freepik.com/free-photo/happy-young-woman-throwing-mini-tiffin-box-recycle-dustbin_23-2147839060.jpg?t=st=1726935239~exp=1726938839~hmac=af63bbe3fa378177056621a270363dd6766a6c139c31715822453efdf1fc25ef&w=1800" alt="About Us" />
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

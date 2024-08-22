import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {

    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate('/Getstarted');  // Navigate to the GetStarted component
    };

    return (
        <section id="Hero" className="hero">
            <div className="hero-content">
                <h1>Trouble-Free Recycling!</h1>
                <p>Making Recycling Simple and Convenient</p>
                <button className="get-started" onClick={handleGetStartedClick}>
                    GET STARTED
                </button>
            </div>
        </section>
    );
};

export default Hero;


import React, { useState } from 'react';
import './OurApproach.css';
import mission from '../images/mission.png';
import vision from '../images/vision.png';
import values from '../images/values.png'
import packBackground from '../images/topbackground.png';
import environment from '../images/environment.png';
import impact from '../images/impact1.png';
import client from '../images/client.png';
import innovation from '../images/innovation.png';
import working from '../images/working.avif';
import stakeholders from '../images/stakeholders.png';

const principlesData = [
    {
        id: 1,
        title: 'Environmental Sustainability',
        description: 'Our operations reflect how we integrate environmental sustainability into business. Our mission Zero Waste to Landfill ensures diversion of CO2 emissions, prevention of pollution, and a healthier environment.',
        icon: environment, // Replace with the actual path or image URL
    },
    {
        id: 2,
        title: 'Impacting the BOP',
        description: 'We believe in creating maximum positive impact for people from the Bottom of the Pyramid (BoP) by providing employment and measures for social as well as financial inclusion.',
        icon: impact,
    },
    {
        id: 3,
        title: 'Client Service',
        description: 'We aim to provide high-quality service to our clients, serving them consistently for their implied and stated needs.',
        icon: client,
    },
    {
        id: 4,
        title: 'Innovation',
        description: 'We are committed to continuous improvement and innovation in everything we do.',
        icon: innovation,
    },
    {
        id: 5,
        title: 'Conducive Working Environment',
        description: 'We ensure a supportive and empowering environment for our employees to perform their best.',
        icon: working,
    },
    {
        id: 6,
        title: 'Maximizing Value for Shareholders',
        description: 'We aim to maximize value for our shareholders through sound decision-making and efficient operations.',
        icon: stakeholders,
    },
];

const OurApproach = () => {
    // State to manage the current active tab
    const [activeTab, setActiveTab] = useState('mission');

    // Content for each tab
    const getContent = () => {
        switch (activeTab) {
            case 'mission':
                return (
                    <div className="mission-content">
                        <h3>Mission</h3>
                        <img src={mission} alt="Mission Globe" />
                        <p>
                            To empower individuals and communities to embrace sustainable practices by providing a convenient and efficient recycling platform that facilitates the responsible disposal of recyclable materials, ultimately contributing to a cleaner and healthier planet.
                        </p>
                    </div>
                );
            case 'vision':
                return (
                    <div className="mission-content">
                        <h3>Vision</h3>
                        <img src={vision} alt="Vision Icon" />
                        <p>
                            To be a leading recycling platform recognized for transforming waste management practices, inspiring a global movement towards sustainability, and fostering a culture of environmental responsibility in every household.
                        </p>
                    </div>
                );
            case 'core-value':
                return (
                    <div className="mission-content">
                        <h3>Core Values</h3>
                        <img src={values} alt="Core Values Icon" />
                        <p>
                            We are dedicated to promoting sustainable practices and minimizing environmental impact through effective recycling solutions. We are committed to making recycling easy and accessible for everyone, breaking down barriers to responsible waste management.
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (

        <>
            <div className="full-width-image">
                <img src={packBackground} alt="Full width banner" />
            </div>
            <div className="our-approach-container">
                <div className="about-us">
                    <h2>About Us</h2>
                    <p>
                        <span className="highlight-text">"At Greenify"</span>, we are committed to making recycling easy and accessible for everyone. As a dedicated <strong>RECYCLING PLATFORM</strong>, we facilitate the collection of recyclable items directly from your doorstep. Our mission is to reduce waste and promote sustainability by providing a seamless solution for responsible disposal. With our user-friendly service, you can easily schedule pickups for various recyclable materials, from paper and plastics to electronics and metals. Together, we aim to create a cleaner environment and foster a culture of recycling, helping to build a greener future for generations to come. <strong>PEOPLE, PROCESS</strong> and <strong>INFRASTRUCTURE</strong>.
                        The services are designed, customized, and scheduled as per the requirements of the varied stakeholders in the system.
                    </p>
                </div>
                <div className="our-approach">
                    <h2>Our Approach</h2>
                    <p>
                        At Greenify, our approach to recycling is built on simplicity, accessibility, and community involvement. We understand that effective recycling requires more than just collecting materials; it requires fostering a culture of environmental responsibility.
                    </p>
                </div>

                <div className="mission-section">
                    {/* Mission Tabs */}
                    <div className="mission-tabs">
                        <button
                            className={`tab-button ${activeTab === 'mission' ? 'active' : ''}`}
                            onClick={() => setActiveTab('mission')}
                        >
                            MISSION
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'vision' ? 'active' : ''}`}
                            onClick={() => setActiveTab('vision')}
                        >
                            VISION
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'core-value' ? 'active' : ''}`}
                            onClick={() => setActiveTab('core-value')}
                        >
                            CORE VALUE
                        </button>
                    </div>
                    {getContent()}
                </div>
            </div>

            <div className="approach-container">
                <h2>Our Guiding Principles</h2>
                <div className="principles-grid">
                    {principlesData.map(principle => (
                        <div key={principle.id} className="principle-card">
                            <img src={principle.icon} alt={principle.title} />
                            <h3>{principle.title}</h3>
                            <p>{principle.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default OurApproach;

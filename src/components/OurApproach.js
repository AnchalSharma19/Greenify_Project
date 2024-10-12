import React, { useState } from 'react';
import './OurApproach.css';
import mission from '../images/mission.png';
import vision from '../images/vision.png';
import values from '../images/values.png'

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
    );
};

export default OurApproach;

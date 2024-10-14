import React from 'react';
import './Work.css';
import schedule from '../images/schedulepickup.png';
import bag from '../images/bagimg.png';
import pickup from '../images/pickup.png';

const Work = () => {
    return (
        <div className="work-container" id="Work">
            <h2 className="work-title">How does it work?</h2>
            <p className="work-description">
                We provide doorstep collection for items that are difficult to recycle and link them with our trusted recycling partners. Our Power Pickup service operates in Delhi, Mumbai, Pune, Banglore, Hyderabad, and beyond.
                <a href="#" className="details">Find out where we collect here.</a>
            </p>
            <p className="work-subdescription">All you have to do is:</p>
            <div className="work-steps">
                <div className="step">
                    <div className="step-image">
                        <img src={schedule} alt="Schedule a pickup" />
                    </div>
                    <h3>1. Schedule a pickup</h3>
                    <p>Log in or use our app to set up your collection day</p>
                </div>
                <div className="step">
                    <div className="step-image">
                        <img src={bag} alt="Pack your bags" />
                    </div>
                    <h3>2. Pack your bags</h3>
                    <p>Put your hard-to-recycle things into any regular shopping bag</p>
                </div>
                <div className="step">
                    <div className="step-image">
                        <img src={pickup} />
                    </div>
                    <h3>3. Leave them outside</h3>
                    <p>Leave the bag/s outside your house for us to collect on pickup day</p>
                </div>
            </div>
        </div>
    );
};

export default Work;

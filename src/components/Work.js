import React from 'react';
import './Work.css';

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
                    <div className="step-image yellow">
                        <img src="https://images.unsplash.com/photo-1493401415972-d4001c9fa2aa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Schedule a pickup" />
                    </div>
                    <h3>1. Schedule a pickup</h3>
                    <p>Log in or use our app to set up your collection day</p>
                </div>
                <div className="step">
                    <div className="step-image pink">
                        <img src="https://images.unsplash.com/photo-1572196223922-d8b7e0ab0b4d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pack your bags" />
                    </div>
                    <h3>2. Pack your bags</h3>
                    <p>Put your hard-to-recycle things into any regular shopping bag</p>
                </div>
                <div className="step">
                    <div className="step-image blue">
                        <img src="https://plus.unsplash.com/premium_photo-1682090260563-191f8160ca48?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Leave them outside" />
                    </div>
                    <h3>3. Leave them outside</h3>
                    <p>Leave the bag/s outside your house for us to collect on pickup day</p>
                </div>
            </div>
        </div>
    );
};

export default Work;

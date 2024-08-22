// Impact.js
import React from 'react';
import './Impact.css';

const Impact = () => {
    return (
        <div className="impact-container">
            <h2 className="impact-heading">Our Impact</h2>
            <div className="impact-marquee">
                <div className="impact-text pulse">
                    <span>60,000 Happy Users</span>
                </div>
                <div className="impact-separator">|</div>
                <div className="impact-text pulse">
                    <span>2,000 Power Pickups </span>
                </div>
                <div className="impact-separator">|</div>
                <div className="impact-text pulse">
                    <span>17 Cities</span>
                </div>
            </div>
        </div>
    );
}

export default Impact;

import React from 'react';
import './RecycleProcess.css';
import image from '../images/recycleProcess.png';

const RecycleProcess = () => {
    return (
        <section className="recycle-process">
            <div className="recycle-content">
                <h2>What happens to my items?</h2>
                <p>
                    We partner with vetted partners to find the best solution for your valuable resources: reusing or recycling.
                </p>
                <p>
                    For example, soft plastics will be turned back into oil or asphalt additive, wearable clothes are donated to local charities, like Australian Red Cross; gold, silver, copper, and rare earth metals are extracted from your e-waste, etc.
                </p>
                <a href="#learn-more">Learn more</a>
            </div>
            <div className="recycle-image">
                <img
                    src={image}
                    alt="Recycling Process"
                />
            </div>
        </section>
    );
};

export default RecycleProcess;

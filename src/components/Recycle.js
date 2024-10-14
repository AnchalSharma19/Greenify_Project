import React from 'react';
import './Recycle.css';
import recycleImage from '../images/recyleImage.png';
import step1 from '../images/step1.png';
import step2 from '../images/step2.png';
import step3 from '../images/step3.png';
import step4 from '../images/step4.png';
import reycleImg from '../images/recycleImg.png';
import insta from '../images/instagram.png';
import fb from '../images/facebook.avif';
import linkdlin from '../images/linkedin.png';


const RecycleComponent = () => {
    return (
        <div>
            {/* Existing Section */}
            <div className="recycle-container">
                <div className="recycle-text">
                    <p>What happens to the items we collect?</p>
                    <h1>We send them on the journey of their (second) life.</h1>
                    <br />
                    <button className="recycle-button">Find out more ↓</button>
                </div>
                <div className="recycle-image2">
                    <img src={recycleImage} alt="Recycling process" />
                </div>
            </div>
            <br />

            {/* New Section: How it works */}
            <div className="how-it-works">
                <h2>How it Works</h2>
                <p>No magic wand, just a rock-solid process and a trusted network of partners ready to reuse or recycle what we carefully sort. Our sorting guarantees clean, valuable recyclables or items ready for immediate reuse.</p>

                <div className="steps-container">
                    <div className="step">
                        <img src={step1} alt="Step 1 Sorting" />
                        <h3>STEP 1</h3>
                        <p>Sorting</p>
                    </div>
                    <div className="step">
                        <img src={step2} alt="Step 2 Consolidating" />
                        <h3>STEP 2</h3>
                        <p>Consolidating</p>
                    </div>
                    <div className="step">
                        <img src={step3} alt="Step 3 Sending off for reuse or recycling" />
                        <h3>STEP 3</h3>
                        <p>Sending off for reuse or recycling</p>
                    </div>
                    <div className="step">
                        <img src={step4} alt="Step 4 Tracking & reporting" />
                        <h3>STEP 4</h3>
                        <p>Tracking & reporting</p>
                    </div>
                </div>
            </div>

            {/* Traceability Section */}
            <div className="traceability-container">
                <div className="traceability-video">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/your-video-id"
                        title="Traceability feature with RecycleSmart"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="traceability-text">
                    <h2>Traceability</h2>
                    <p>At RecycleSmart, we meticulously gather data on the resources we retrieve. <br />The items we collect are taken to our consolidation points where the items are organised to be connected with our recycling & reuse partners.</p>
                </div>
            </div>

            {/* New Image Section */}
            <div className="second-life-section">
                <div className="second-life-images">
                    <div className="second-life-image-item">
                        <img src={reycleImg} alt="Soft Plastics" />
                    </div>
                </div>
                <div className="second-life-text">
                    <h2>A second life to almost everything</h2>
                    <p>We collect over 100 different items that are recycled, reused, repaired, repurposed, or returned.</p>
                    <div className="social-icons">
                        <img src={insta} alt="Instagram" />
                        <img src={fb} alt="Facebook" />
                        <img src={linkdlin} alt="LinkedIn" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecycleComponent;

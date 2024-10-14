import React, { useEffect, useRef, useState } from "react";
import './Bechange.css';
import bechange from '../images/change.png';

const Bechange = () => {
    const [isVisible, setIsVisible] = useState(false);
    const bechangeRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(bechangeRef.current); // Stop observing once visible
                }
            },
            {
                root: null,
                threshold: 0.3,
            }
        );

        if (bechangeRef.current) {
            observer.observe(bechangeRef.current);
        }

        return () => {
            if (bechangeRef.current) {
                observer.unobserve(bechangeRef.current);
            }
        };
    }, []);

    return (
        <div
            className={`bechange-container ${isVisible ? "visible" : ""}`}
            ref={bechangeRef}
        >
            <div className="image-section">
                <img src={bechange} alt="Go Green" className="recycle-image" />
                <div className="overlay-text">
                    <p></p>
                    <h1></h1>
                    <p className="logo-text"></p>
                </div>

            </div>
            <div className="text-section">
                <h2 className="heading_one">Iniciate the change.</h2>
                <h1 className="heading_two">Recycle Today for a better Tommorrow.</h1>
                <br />
                <button className="get-started-button">GET STARTED</button>
            </div>
        </div >
    );
};

export default Bechange;

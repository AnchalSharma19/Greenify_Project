import React, { useEffect, useRef, useState } from "react";
import './Bechange.css';

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
                root: null, // null means it observes the viewport
                threshold: 0.3, // Trigger when 30% of the component is visible
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
                <img src="https://images.unsplash.com/photo-1643701323325-87c79c0e62a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Go Green" className="recycle-image" />
                <div className="overlay-text">
                    <p>Please don't discard me, I'm awaiting collection.</p>
                    <h1>Do it Every day.</h1>
                    <p className="logo-text">Go Greenify</p>
                </div>

            </div>
            <div className="text-section">
                <h2 className="heading_one">Iniciate the change.</h2>
                <h1 className="heading_two">Recycle Today for a better Tommorrow.</h1>
                <button className="get-started-button">GET STARTED</button>
            </div>
        </div>
    );
};

export default Bechange;

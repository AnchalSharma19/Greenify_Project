import React from 'react';
import './Footernew.css';

const Footernew = () => {
    return (
        <footer className="footernew">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Greenify</h3>
                    <p>Created with <i className="fas fa-heart"></i> by Anchal, Janaki & Ankita.</p>
                </div>
                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Works</a></li>
                        <li><a href="#">Feedback</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="#"><i className="fas fa-map-marker-alt"></i> New Delhi, India</a></li>
                        <li><a href="#"> <i className="fas fa-phone"></i> +91 9876543210</a></li>
                        <li><a href="#"><i className="fas fa-mail-bulk"></i> support@gmail.com</a></li>
                        <li><a href="#"><i className="fas fa-marker"></i> Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Connect With Us</h4>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
            <br />
            <div className="copyright">©2024 Copyright:
                All rights are reserved
            </div>
        </footer>
    );
};

export default Footernew;

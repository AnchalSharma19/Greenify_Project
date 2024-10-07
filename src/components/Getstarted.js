import React from 'react';
import './Getstarted.css';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {

    const navigate = useNavigate(); // Initialize useNavigate

    // Function to handle the "Sign up here" click
    const handleSignUpClick = (e) => {
        e.preventDefault();  // Prevent the default anchor behavior
        navigate('/SignUp'); // Navigate to the SignUp page
    };

    const handleForgotPasswordClick = (e) => {
        e.preventDefault();  // Prevent the default anchor behavior
        navigate('/Forgetpass'); // Navigate to the Forgetpass page
    };


    return (
        <div id="Getstarted" className="get-started-container">
            <p className="new-user">
                <span className="logo_1">Greenify</span><br />
                <br />
                New user? <a href="#" onClick={handleSignUpClick}>Sign up here</a>
            </p>
            <br />

            <form className="login-form">
                <input type="email" placeholder="Email" className="input-field" />
                <input type="password" placeholder="Password" className="input-field" />
                <button type="submit" className="login-button">Login</button>
                <p className="forgot-password">
                    Forgot password? <a href="#" onClick={handleForgotPasswordClick}>Click here</a>
                </p>
            </form>

            <div className="social-login">
                <p>or</p>
                <button className="social-button apple">Continue with <i className='fab fa-apple'></i></button>
                <button className="social-button facebook">Continue with <i className='fab fa-facebook'></i></button>
                <button className="social-button google">Continue with <i className='fab fa-google'></i></button>
            </div>

        </div>
    );
};

export default GetStarted; // Correct capitalization

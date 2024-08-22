import React from 'react';
import './Getstarted.css';

const Getstarted = () => {
    return (
        <div id="Getstarted" className="get-started-container">
            <p className="new-user">
                <p className="logo_1">Greenify</p>
                New user? <a href="#">Sign up here</a>
            </p>

            <form className="login-form">
                <input type="email" placeholder="Email" className="input-field" />
                <input type="password" placeholder="Password" className="input-field" />
                <button type="submit" className="login-button">Login</button>
                <p className="forgot-password">
                    Forgot password? <a href="#">Click here</a>
                </p>
            </form>

            <div className="social-login">
                <p>or</p>
                <button className="social-button apple">Continue with <i className='fab fa-apple'></i></button>
                <button className="social-button facebook">Continue with <i className='	fab fa-facebook'></i></button>
                <button className="social-button google">Continue with <i className='fab fa-google'></i></button>
            </div>

            <p className="new-user-bottom">
                New user? <a href="#">Sign up here</a>
            </p>

            <p className="app-version">App Version 7.23.6(63435)</p>
        </div>
    );
};

export default Getstarted;

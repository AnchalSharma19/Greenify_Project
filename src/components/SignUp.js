import React from 'react';
import './Getstarted.css';

const SignUp = () => {
    return (
        <div id="Getstarted" className="get-started-container">
            <p className="new-user">
                <span className="logo_1">Greenify</span><br />
                <br />
                Happy To Have You Here
            </p>
            <br />

            <form className="login-form">
                <input type="text" placeholder="Username" className='input-field' />
                <input type="email" placeholder="Email" className="input-field" />
                <input type="password" placeholder="Password" className="input-field" />
                <button type="submit" className="login-button">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
import React from 'react';
import './ForgetPass.css';

const Forgetpass = () => {
    return (
        <div id="Getstarted" className="forgetpass-container">
            <p className="new-user">
                <span className="logo_1">Forget Password</span><br />
                <br />
            </p>
            <br />

            <form className="login-form">

                <input type="email" placeholder="Email" className="input-field" />

                <button type="submit" className="login-button">Submit</button>
            </form>
        </div>
    );
};

export default Forgetpass;

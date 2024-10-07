import React from 'react';
import './ForgetPass.css';
import { useNavigate } from 'react-router-dom';

const Forgetpass = () => {

    const navigate = useNavigate();


    const handleGoToLoginClick = (e) => {
        e.preventDefault();
        navigate('/Getstarted'); // Navigate to the Getstarted page
    };
    
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
                <br />
                <br />
                <a href="" onClick={handleGoToLoginClick}>Go to LogIn</a>
            </form>
        
        </div>
    );
};

export default Forgetpass;

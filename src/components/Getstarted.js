// import React from 'react';
// import './Getstarted.css';
// import { useNavigate } from 'react-router-dom';

// const GetStarted = () => {

//     const navigate = useNavigate(); // Initialize useNavigate

//     // Function to handle the "Sign up here" click
//     const handleSignUpClick = (e) => {
//         e.preventDefault();  // Prevent the default anchor behavior
//         navigate('/SignUp'); // Navigate to the SignUp page
//     };

//     const handleForgotPasswordClick = (e) => {
//         e.preventDefault();  // Prevent the default anchor behavior
//         navigate('/Forgetpass'); // Navigate to the Forgetpass page
//     };


//     return (
//         <div id="Getstarted" className="get-started-container">
//             <p className="new-user">
//                 <span className="logo_1">Greenify</span><br />
//                 <br />
//                 New user? <a href="#" onClick={handleSignUpClick}>Sign up here</a>
//             </p>
//             <br />

//             <form className="login-form">
//                 <input type="email" placeholder="Email" className="input-field" />
//                 <input type="password" placeholder="Password" className="input-field" />
//                 <button type="submit" className="login-button">Login</button>
//                 <p className="forgot-password">
//                     Forgot password? <a href="#" onClick={handleForgotPasswordClick}>Click here</a>
//                 </p>
//             </form>

//             <div className="social-login">
//                 <p>or</p>
//                 <button className="social-button apple">Continue with <i className='fab fa-apple'></i></button>
//                 <button className="social-button facebook">Continue with <i className='fab fa-facebook'></i></button>
//                 <button className="social-button google">Continue with <i className='fab fa-google'></i></button>
//             </div>

//         </div>
//     );
// };

// export default GetStarted; // Correct capitalization

import React, { useState } from 'react';
import './Getstarted.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetStarted = () => {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleSignUpClick = (e) => {
        e.preventDefault();
        navigate('/signup');
    };

    const handleForgotPasswordClick = (e) => {
        e.preventDefault();
        navigate('/forgetpass');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return toast.error('Email and password are required');
        }
        try {
            const url = `http://localhost:8080/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;
            if (success) {
                toast.success(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/home');
                }, 1000);
            } else if (error) {
                const details = error?.details[0].message;
                toast.error(details || message);
            } else if (!success) {
                toast.error(message);
            }
        } catch (err) {
            toast.error('An error occurred while logging in');
        }
    };

    return (
        <div id="Getstarted" className="get-started-container">
            <p className="new-user">
                <span className="logo_1">Greenify</span><br />
                <br />
                New user? <a href="#" onClick={handleSignUpClick}>Sign up here</a>
            </p>
            <br />

            <form className="login-form" onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    className="input-field"
                    name="email"
                    value={loginInfo.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="input-field"
                    name="password"
                    value={loginInfo.password}
                    onChange={handleChange}
                />
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

            <ToastContainer />
        </div>
    );
};

export default GetStarted;



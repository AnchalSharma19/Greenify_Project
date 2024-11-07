// import React from 'react';
// import './Getstarted.css';

// const SignUp = () => {
//     return (
//         <div id="Getstarted" className="get-started-container">
//             <p className="new-user">
//                 <span className="logo_1">Greenify</span><br />
//                 <br />
//                 Happy To Have You Here
//             </p>
//             <br />

//             <form className="login-form">
//                 <input type="text" placeholder="Username" className='input-field' />
//                 <input type="email" placeholder="Email" className="input-field" />
//                 <input type="password" placeholder="Password" className="input-field" />
//                 <button type="submit" className="login-button">Sign Up</button>
//             </form>
//         </div>
//     );
// };

// export default SignUp;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './Getstarted.css';

const SignUp = () => {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;

        
        if (!name || !email || !password) {
            return toast.error('All fields are required');
        }

        try {
            const url = `http://localhost:8080/auth/signup`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });

            const result = await response.json();
            const { success, message, error } = result;

            if (success) {
                toast.success(message);  
                setTimeout(() => navigate('/login'), 1000);  
            } else {
                toast.error(error?.details[0].message || message);  
            }
        } catch (err) {
            toast.error('An error occurred during signup');  
        }
    };

    return (
        <div id="Getstarted" className="get-started-container">
            <p className="new-user">
                <span className="logo_1">Greenify</span><br />
                <br />
                Happy To Have You Here
            </p>
            <br />
            <form className="login-form" onSubmit={handleSignup}>
                <input
                    type="text"
                    placeholder="Username"
                    className="input-field"
                    name="name"
                    value={signupInfo.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="input-field"
                    name="email"
                    value={signupInfo.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="input-field"
                    name="password"
                    value={signupInfo.password}
                    onChange={handleChange}
                />
                <button type="submit" className="login-button">Sign Up</button>
            </form>
            <ToastContainer />  {/* Toast container for notifications */}
        </div>
    );
};

export default SignUp;

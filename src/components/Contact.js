

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        subject: '',
        message: ''
    });
    const [isSent, setIsSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email || !formData.name || !formData.subject || !formData.message) {
            setErrorMessage('All fields are required!');
            return;
        }

        setErrorMessage('');

        // Send the email using EmailJS
        emailjs.send(
            'service_38kju0r',   // Your service ID
            'template_83f5s28',   // Your template ID
            formData,
            '7_EhmF5L0mQnmZ5Ny'   // Your public key (User ID)
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setIsSent(true);

            
            setFormData({
                email: '',
                name: '',
                subject: '',
                message: ''
            });

           
            setTimeout(() => {
                setIsSent(false);
            }, 3000); 
        }).catch((err) => {
            console.error('FAILED...', err);
            setErrorMessage('Something went wrong. Please try again later.');
        });
    };

    return (
        <div id="Contact" className="contact-container">
            <div className="form-background">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Contact Us</h2>
                    <p>Looking to connect or share your thoughts? Use this form.</p>
                    <div className="form-group">
                        <label>Email *</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Name *</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Subject *</label>
                        <input
                            type="text"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button type="submit">Send</button>
                    {isSent && <p>Thank you! Your message has been sent.</p>}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;

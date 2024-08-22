import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div id="Contact" className="contact-container">
            <div className="form-background">
                <form className="contact-form">
                    <h2>Contact Us</h2>
                    <p>Looking to connect or share your thoughts? Use this form.</p>
                    <div className="form-group">
                        <label>Email *</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label>Name *</label>
                        <input type="text" name="name" required />
                    </div>
                    <div className="form-group">
                        <label>Subject *</label>
                        <input type="text" name="subject" required />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea name="message" rows="5"></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
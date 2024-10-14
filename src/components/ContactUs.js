import React from "react";
import Contact from "./Contact";
import "./ContactUs.css";
const ContactUs = () => {
	return (
		<div className="container">
			<div className="header-wrap-cu">
				{/* <img src={headerSus} /> */}
				<h1 className="header-cu">Contact Us</h1>
			</div>
			<div className="contact-text">
				<p>
					Please fill in your details below our team will get back to
					you soon.
				</p>
			</div>
			<Contact />
		</div>
	);
};

export default ContactUs;

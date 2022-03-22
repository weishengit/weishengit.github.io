import React from 'react';
import { MdMailOutline } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { FaLinkedin } from 'react-icons/fa';
import './contact.css';


const Contact = () => {
	return (
		<section id='contact' aria-label='Contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">

				<div className="contact__options">

					<article className="contact__option">
						<MdMailOutline />
						<h4>Email</h4>
						<h5>julesdaryldiego@gmail.com</h5>
						<a href="mailto:julesdaryldiego@gmail.com">Send an email</a>
					</article>

					<article className="contact__option">
						<RiMessengerLine />
						<h4>Messenger</h4>
						<h5>Jules Diego</h5>
						<a href="https://m.me/jules.diego">Send a message</a>
					</article>

					<article className="contact__option">
						<FaLinkedin />
						<h4>LinkedIn</h4>
						<h5>Jules Diego</h5>
						<a 
							href="https://www.linkedin.com/in/jules-daryl-diego/" 
							target="_blank" 
							rel='noreferrer'>
							Visit my profile
						</a>
					</article>

				</div>

				<form action="">

				</form>

			</div>
		</section>
	);
};

export default Contact;
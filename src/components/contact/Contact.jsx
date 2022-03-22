import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdMailOutline } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { FaLinkedin } from 'react-icons/fa';
import './contact.css';


const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_mknw9ps', 'template_m60r4is', form.current, '_iLN2KyXuDqxsSoCW')

		e.target.reset();
	};

	return (
		<section id='contact' aria-label='Contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">

				<div className="contact__options">
					<article className="contact__option">
						<MdMailOutline className='contact__option-icon'/>
						<h4>Email</h4>
						<h5>julesdaryldiego@gmail.com</h5>
						<a 
							href="mailto:julesdaryldiego@gmail.com"
							target="_blank" 
							rel='noreferrer'>Send an email</a>
					</article>

					<article className="contact__option">
						<RiMessengerLine className='contact__option-icon'/>
						<h4>Messenger</h4>
						<h5>Jules Diego</h5>
						<a 
							href="https://m.me/jules.diego"
							target="_blank" 
							rel='noreferrer'>Send a message</a>
					</article>

					<article className="contact__option">
						<FaLinkedin className='contact__option-icon'/>
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

				<form 
					ref={form}
					onSubmit={sendEmail}
				>
					<input type="text" name='name' placeholder='Your Name' required	/>
					<input type="email" name='email' placeholder='Your Email' required/>
					<textarea name="message" rows="7" placeholder='Your Message' required></textarea>
					<button className="btn btn-primary" type='submit'>Send Message</button>
				</form>

			</div>
		</section>
	);
};

export default Contact;
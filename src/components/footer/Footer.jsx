import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import './footer.css';

const Footer = () => {
	return (
		<footer>
			<a 
				href="#header"
				className='footer__logo'
			>
				Diego
			</a>
			<ul className="permalinks">
				<li><a href="#header">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#experience">Experience</a></li>
				<li><a href="#services">Services</a></li>
				<li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#testimonials">Testimonials</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>

			<div className="footer__socials">
				<a href="https://facebook.com">
					<BsFacebook />
				</a>
				<a href="https://github.com">
					<BsGithub />
				</a>
				<a href="https://linkedin.com">
					<BsLinkedin />
				</a>
			</div>

			<div className="footer__copyright">
				<small>&copy; Diego. All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
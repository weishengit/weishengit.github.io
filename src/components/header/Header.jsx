import React from 'react';
import CTA from './CTA';
import ME from '../../assets/images/me2.png';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
	return (
		<header id='header'>
			<div className="container header__container" >
				<h5>Hello I'm</h5>
				<h1>Jules Daryl</h1>
				<h5 className='text-light'>Fullstack Web Developer</h5>
				<CTA />
				<HeaderSocials />

				<div className="me">
					<img src={ME} alt="Me" />
				</div>

				<a href="#contact" className='scroll__down'>Scroll Down</a>
			</div>
		</header>
	);
};

export default Header;
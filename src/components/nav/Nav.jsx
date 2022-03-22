import React from 'react';
import { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { MdWorkOutline } from 'react-icons/md';
import './nav.css';



const Nav = () => {
	const [activeNav, setActiveNav] = useState('#header')
	return (
		<nav>
			<a 
				href="#header" 
				onClick={() => setActiveNav('#header')}
				className={activeNav === '#header' ? 'active' : ''}>
				<AiOutlineHome />
			</a>
			<a 
				href="#about" 
				onClick={() => setActiveNav('#about')}
				className={activeNav === '#about' ? 'active' : ''}>
				<AiOutlineUser />
			</a>
			<a 
				href="#experience"
				onClick={() => setActiveNav('#experience')}
				className={activeNav === '#experience' ? 'active' : ''}>
				<BiBook />
			</a>
			<a 
				href="#services"
				onClick={() => setActiveNav('#services')}
				className={activeNav === '#services' ? 'active' : ''}>
				<MdWorkOutline />
			</a>
			<a 
				href="#contact"
				onClick={() => setActiveNav('#contact')}
				className={activeNav === '#contact' ? 'active' : ''}>
				<AiOutlineMessage />
			</a>
		</nav>
	);
};

export default Nav;
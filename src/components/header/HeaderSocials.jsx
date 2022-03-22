import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a 
				href="https://www.linkedin.com/in/jules-daryl-diego/" 
				target="_blank" 
				rel='noreferrer'>
				<BsLinkedin />
			</a>
			<a 
				href="https://github.com/weishengit" 
				target="_blank" 
				rel='noreferrer'>
				<BsGithub />
			</a>
			<a 
				href="mailto:julesdaryldiego@gmail.com">
				<MdEmail />
			</a>
		</div>
	);
};

export default HeaderSocials;
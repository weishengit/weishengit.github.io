import React from 'react';
import CV from '../../assets/files/cv.pdf';

const CTA = () => {
	return (
		<div className='cta'>
			<a 
				className='btn'
				href={CV} 
				download>
				Download CV
			</a>
			<a 
				className='btn btn-primary'
				href="#contact"
				>Get in Touch
			</a>
		</div>
	);
};

export default CTA;
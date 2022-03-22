import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import aboutPhoto from '../../assets/images/about-me2.png';
import './about.css';

const About = () => {
	return (
		<section id='about' aria-label='About Me'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<img 
						className='about__me-img'
						src={aboutPhoto}
						alt="About" />
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className='about__icon'/>
							<h5>Experience</h5>
							<small>1 Year Working</small>
						</article>
						<article className="about__card">
							<FiUsers className='about__icon'/>
							<h5>Clients</h5>
							<small>5+</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className='about__icon'/>
							<h5>Projects</h5>
							<small>20+</small>
						</article>
					</div>

					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero modi tempora voluptate quisquam! Quod expedita quibusdam alias quo obcaecati a ipsam perferendis voluptates et exercitationem labore, optio harum! Ipsum voluptatum perferendis similique distinctio dicta illum inventore consequuntur in non error cupiditate dolorum incidunt unde a, commodi corrupti magnam magni.
					</p>

					<a 
						className='btn btn-primary'
						href="#contact">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
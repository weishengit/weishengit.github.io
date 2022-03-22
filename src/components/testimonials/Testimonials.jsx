import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './testmonials.css';
import client1 from '../../assets/images/jren.jpg';
import client2 from '../../assets/images/dlord.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
	{ 
		avatar: client1,
		name: 'Jren Valdez',
		review: 'I think it\'s beautiful. 10/10'
	},
	{
		avatar: client2,
		name: 'Darklord',
		review: 'Totoo ba?, hindi mo pa inayos subjects mo? noon ko pa sinasabi yan, gung-gong 1/10'
	},
	{
		avatar: client1,
		name: 'IGN',
		review: 'Its like skyrim with javascript. 10/10'
	}
];

const Testimonials = () => {
	return (
		<section id='testimonials' aria-label='Testimonials'>
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<Swiper 
				className="container testimonials__container"
				// install Swiper modules
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}>
			{
				data.map(({avatar, name, review}, index) => {
					return (
						<SwiperSlide key={index} className="testimonial">
							<div className="client__avatar">
								<img src={avatar} alt={name} />
							</div>
							<h5 className="client__name">{name}</h5>
							<small className="client__review">
								"{review}"
							</small>
						</SwiperSlide>
					);
				})
			}
			</Swiper>
		</section>
	);
};

export default Testimonials;
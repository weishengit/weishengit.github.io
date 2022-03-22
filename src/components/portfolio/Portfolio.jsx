import React from "react";

import "./portfolio.css";
import pharma from "../../assets/portfolio/pharma.png";
import realestate from "../../assets/portfolio/realestate.png";
import inv from "../../assets/portfolio/inv.png";
import magic from "../../assets/portfolio/magic.png";
import aubin from "../../assets/portfolio/aubin.png";
import kardia from "../../assets/portfolio/kardia.png";
import portfolio from "../../assets/portfolio/portfolio.png";

const data = [
	{
		id: 1,
		image: pharma,
		title: "Online Pharmacy System - E-commerce",
		github: "https://github.com/weishengit/onlinepharma",
		demo: "https://onlinepharma.herokuapp.com/"
	},
	{
		id: 2,
		image: realestate,
		title: "Real Estate CMS - Manage your properties",
		github: "https://github.com/weishengit/real-estate-cms",
		demo: "https://realestate-cms-demo.herokuapp.com/"
	},
	{
		id: 3,
		image: inv,
		title: "Inventory Management System",
		github: "https://github.com/weishengit/inventory-v1",
		demo: "https://llj-inventory.herokuapp.com/"
	},
	{
		id: 4,
		image: magic,
		title: "Magic Card Game - Memory Game with React",
		github: "https://github.com",
		demo: "https://github.com"
	},
	{
		id: 5,
		image: aubin,
		title: "Aubin - Share code with your friends",
		github: "https://github.com/weishengit/aubin",
		demo: "https://github.com"
	},
	{
		id: 6,
		image: kardia,
		title: "Kardia - Online Medical Consultation",
		github: "#",
		demo: "https://dev.kardia.clairemontferrond.com/"
	},
	{
		id: 7,
		image: portfolio,
		title: "This Portfolio - React Portfolio",
		github: "#",
		demo: "/"
	}
];

const Portfolio = () => {
	return (
		<section id="portfolio" aria-label="Portfolio">
			<h5>My Latest Works</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{
					data.map(({id, image, title, github, demo}) => {
						return (
							<article key={id} className="portfolio__item">
								<div className="portfolio__item-image">
									<img src={image} alt={title} />
								</div>
								<h3>{title}</h3>
								<div className="portfolio__item-cta">
									<a
										className="btn"
										target="_blank"
										rel="noreferrer"
										href={github}
									>
										Github
									</a>
									<a
										className="btn btn-primary"
										target="_blank"
										rel="noreferrer"
										href={demo}
									>
										Live Demo
									</a>
								</div>
							</article>
						);
					})
				}
			</div>
		</section>
	);
};

export default Portfolio;

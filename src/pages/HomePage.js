// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../api/data';

// Components
import Hero from '../components/Hero/Hero';
import Button from '../components/Button/Button';
import CardList from '../components/Card/CardList';

// Assets
import '../assets/responsive-grid.css';
import './HomePage.css';
import bioPic from '../images/dev-tim.JPG';

class HomePage extends Component {
	render() {
		return (
			<div className="page-content">
				<Hero />
				<div className="section-wrapper">
					<div className="site-features__wrapper">
						<h4 className="site-features__intro">Features of This Website:</h4>
						<div className="site-features">
							<p>Mobile Responsive</p>
							<p>Progressive Web App</p>
							<p>Built with React</p>
							<p>BEM Methodology</p>
						</div>
					</div>
					<div className="grid__container">
						<h1 className="section__title">About Me</h1>
						<div className="grid__row grid__column--one-half">
							<div className="m-auto max-width-100">
								<p className="section__content">
									Hi! Welcome to my personal website! In December 2018, after 10
									years of working as a Captain in the passsenger vessel industry,
									I decided to change careers to become a web developer using the
									latest technologies.
								</p>
								<p className="section__content">
									As of May 2020, I have been learning full-stack Javascript
									engineering, concentrating on React and Node.js.
								</p>
								<Link to="/about">
									<Button classModifier={'button--green button--large'}>
										Learn More
									</Button>
								</Link>
							</div>
							<div className="m-auto max-width-100">
								<img src={bioPic} alt="Tim Lisiecki" className="bio__pic" />
							</div>
						</div>
					</div>
				</div>
				<div className="section-wrapper section-wrapper--grey">
					<div className="grid__container">
						<h1 className="section__title">Skillset</h1>
						<div className="grid__row grid__column--one-third">
							<div className="skillest--centered">
								<span className="connect__icon">
									<i className="fas fa-desktop"></i>
								</span>
								<h4 className="skillset__title">Front End Development</h4>
								<p className="skillset__content">
									Creating modern websites optimized for UI/UX.
								</p>
							</div>
							<div className="skillest--centered">
								<span className="connect__icon">
									<i className="fas fa-laptop-code"></i>
								</span>
								<h4 className="skillset__title">Back End Development</h4>
								<p className="skillset__content">
									Functional business logic powering your website or web app.
								</p>
							</div>
							<div className="skillest--centered">
								<span className="connect__icon">
									<i className="fas fa-chart-line"></i>
								</span>
								<h4 className="skillset__title">Optimization</h4>
								<p className="skillset__content">
									Web sites and apps optmized for mobile, speed, and performance.
								</p>
							</div>
						</div>
						<Link to="/resume">
							<Button classModifier={'button--green button--large'}>See More</Button>
						</Link>
					</div>
				</div>
				<div className="section-wrapper">
					<div className="grid__container">
						<h1 className="section__title">Featured Projects</h1>
						<CardList data={data.projects} linkText="View" isFeatured={true} />
						<Link to="/portfolio">
							<Button classModifier={'button--green button--large'}>
								Check Out More
							</Button>
						</Link>
					</div>
				</div>
				<div className="section-wrapper section-wrapper--grey">
					<div className="grid__container">
						<h1 className="section__title">Connect</h1>
						<div className="connect-features">
							<div className="connect--centered">
								<h5>Need to Contact Me?</h5>
								<span className="connect__icon">
									<a href="mailto:info@timlisiecki.com">
										<i className="fas fa-envelope-open"></i>
									</a>
								</span>
							</div>
							<div className="connect--centered">
								<h5>Want to Collaborate, or See my Work?</h5>
								<span className="connect__icon">
									<a
										href="https://github.com/timlisiecki"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fab fa-github"></i>
									</a>
								</span>
							</div>
							<div className="connect--centered">
								<h5>Want to Hire Me?</h5>
								<span className="connect__icon">
									<a
										href="https://www.linkedin.com/in/timothylisiecki/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fab fa-linkedin-in"></i>
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;

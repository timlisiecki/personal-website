// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data';

// Components
import Hero from '../components/Hero/Hero';
import Button from '../components/Button/Button';

// Assets
import '../assets/responsive-grid.css';
import './HomePage.css';
import bioPic from '../images/timlisiecki.jpg';
import bccPic from '../images/bcc.png';

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
                        <div className="grid__row">
                            <h1>About Me</h1>
                            <div className="grid__column--one-half">
                                <p>
                                    Hi! Welcome to my personal website! After 10 years of working in the passsenger vessel industry as a Captain, I decided to change careers to become a web developer with a focus on front end development using the latest technologies.  
                                </p>
                            </div>
                            <div className="grid__column--one-half">
                                <img src={bioPic} alt="Tim Lisiecki" className="about__pic" />
                            </div>
                            <Link to="/about">
                                <Button>Learn More</Button>
                            </Link>
                        </div>
                    </div>
    			</div>
    			<div className="section-wrapper section-wrapper--grey">
    				<div className="grid__container">
                        <h1>Skillset</h1>
                        <div className="grid__row">
                            <div className="grid__column--one-third">
                                <div className="skillest--centered">
                                    <span className="connect__icon">
                                        <i className="fas fa-desktop"></i>
                                    </span>
                                    <h4>Web Development</h4>
                                    <p>Focused on Front End development, creating modern websites optimized for UX.</p>
                                </div>
                            </div>               
                            <div className="grid__column--one-third">
                                <div className="skillest--centered">
                                    <span className="connect__icon">
                                        <i class="fas fa-mobile-alt"></i>
                                    </span>
                                    <h4>Responsive Design</h4>
                                    <p>Optimized websites that look great on both desktop and mobile.</p>
                                </div>
                            </div>               
                            <div className="grid__column--one-third">
                                <div className="skillest--centered">
                                    <span className="connect__icon">
                                        <i className="fas fa-bullhorn"></i>
                                    </span>
                                    <h4>Digital Marketing</h4>
                                    <p>Intergrated Marketing utilizing Social Media, SEO, and Content Marketing to draw audience to your Website.</p>
                                </div>
                            </div>               
                        </div>
                        <Link to="/resume">
                            <Button>See More</Button>
                        </Link>
                    </div>
    			</div>
    			<div className="section-wrapper">
					<div className="grid__container">
                        <h1>Featured Projects</h1>
                        <div className="grid__row">
                            <div className="grid__column--one-third">
                                <div className="card">
                                    <h4>{data.projects[0].name}</h4>
                                    <img src={bccPic} alt="card" className="project__featured-image" />
                                    <p>{data.projects[0].desc}</p>
                                    <p>{data.projects[0].url}</p>
                                </div>
                            </div>               
                            <div className="grid__column--one-third">
                                <div className="card">
                                    <h4>{data.projects[1].name}</h4>
                                    <img src={data.projects[1].image} alt="card" className="project__featured-image" />
                                    <p>{data.projects[1].desc}</p>
                                    <p>{data.projects[1].url}</p>
                                </div>
                            </div>               
                            <div className="grid__column--one-third">
                                <div className="card">
                                    <h4>{data.projects[1].name}</h4>
                                    <img src={bccPic} alt="card" className="project__featured-image" />
                                    <p>{data.projects[1].desc}</p>
                                    <p>{data.projects[1].url}</p>
                                </div>
                            </div>               
                        </div>
                        <Link to="/portfolio">
                            <Button>Check Out More</Button>
                        </Link>
                    </div>
    			</div>
    			<div className="section-wrapper section-wrapper--grey">
    				<h1>Connect</h1>
    				<div className="connect-features">
                        <div className="connect--centered">
                            <h5>Need to Contact Me?</h5>
                            <span className="connect__icon">
                                <a href="mailto:info@timlisiecki.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-envelope-open"></i>
                                </a>
                            </span>
                        </div>
                        <div className="connect--centered">
                            <h5>Want to Collaborate, or See my Work?</h5>
                            <span className="connect__icon">
                                <a href="https://github.com/timlisiecki" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                            </span>
                        </div>
                        <div className="connect--centered">
                            <h5>Want to Hire Me?</h5>
                            <span className="connect__icon">
                                <a href="https://www.linkedin.com/in/timothylisiecki/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </span>
                        </div>
                    </div>
    			</div>
			</div>
		);
	}
}

export default HomePage;
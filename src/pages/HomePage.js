// Dependencies
import React, { Component } from 'react';

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
			<div className="home-content">
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
                        <div class="grid__row">
                            <div className="grid__column--one-half">
                                <h1>About Me</h1>
                                <p>
                                    Hi! Welcome to my personal website! After 10 years of working in the passsenger vessel industry as a Captain, I decided to change careers to become a web developer with a focus on front end development using the latest technologies.  
                                </p>
                                <Button>Learn More</Button>
                            </div>
                            <div className="grid__column--one-half">
                                <img src={bioPic} alt="Tim Lisiecki" className="about__pic" />
                            </div>
                        </div>
                    </div>
    			</div>
    			<div className="section-wrapper section-wrapper--grey">
    				<div className="grid__container">
                        <h1>Featured Projects</h1>
                        <div className="grid__row">
                            <div className="grid__column--one-third">
                                <div>
                                    <h4>Web Development</h4>
                                    <p>Focused on Front End development, creating modern websites optimized for UX.</p>
                                </div>
                            </div>               
                            <div className="grid__column--one-third">
                                <div>
                                    <h4>Responsive Design</h4>
                                    <p>Optimized websites that look great on both desktop and mobile.</p>
                                </div>
                            </div>               
                            <div className="grid__column--one-third">
                                <div>
                                    <h4>Digital Marketing</h4>
                                    <p>Intergrated Marketing utilizing Social Media, SEO, and Content Marketing to draw audience to your Website.</p>
                                </div>
                            </div>               
                        </div>
                        <Button>See More</Button>
                    </div>
    			</div>
    			<div className="section-wrapper">
					<div className="grid__container">
                        <h1>Featured Projects</h1>
                        <div className="grid__row">
                            <div className="grid__column--one-third">
                                <div>
                                    <img src={bccPic} alt="card" className="project__featured-image" />
                                    <h4>Title</h4>
                                    <p>Description</p>
                                    <p>URL to project</p>
                                </div>
                            </div>               
                            <div className="grid__column--one-third">
                                <div>
                                    <img src={bccPic} alt="card" className="project__featured-image" />
                                    <h4>Title</h4>
                                    <p>Description</p>
                                    <p>URL to project</p>
                                </div>
                            </div>               
                            <div className="grid__column--one-third">
                                <div>
                                    <img src={bccPic} alt="card" className="project__featured-image" />
                                    <h4>Title</h4>
                                    <p>Description</p>
                                    <p>URL to project</p>
                                </div>
                            </div>               
                        </div>
                        <Button>Check Out More</Button>
                    </div>
    			</div>
    			<div className="section-wrapper section-wrapper--grey">
    				<h1>Connect</h1>
    				<div className="connect-features">
                        <div>
                            <h5>Need to Contact Me?</h5>
                            <span className="connect__icon">
                                <a href="mailto:info@timlisiecki.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-envelope-open"></i>
                                </a>
                            </span>
                        </div>
                        <div>
                            <h5>Want to Collaborate, or See my Work?</h5>
                            <span className="connect__icon">
                                <a href="https://github.com/timlisiecki" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                            </span>
                        </div>
                        <div>
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
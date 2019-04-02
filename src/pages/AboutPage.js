// Dependencies
import React, { Component } from 'react';
import { data } from '../data';

// Components
import SubpageHero from '../components/Hero/SubpageHero';
import Button from '../components/Button/Button';

// Assets
import '../assets/responsive-grid.css';
import './HomePage.css';
import bioPic from '../images/timlisiecki.jpg';

class HomePage extends Component {



	render() {
		return (
			<div className="home-content">
				<SubpageHero title="About Me"/>
			    <div className="section-wrapper">
    				<div className="grid__container">
                        <div className="grid__row">
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
                        <h1>Skillset</h1>
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
			</div>
		);
	}
}

export default HomePage;
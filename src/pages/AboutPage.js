// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import SubpageHero from '../components/Hero/SubpageHero';

// Assets
import '../assets/responsive-grid.css';
import './AboutPage.css';
import bioPic from '../images/captain-tim.JPG';
import bioPic2 from '../images/dev-tim.JPG';

class AboutPage extends Component {

	render() {
		return (
			<div className="page-content">
				<SubpageHero title="About Me"/>
			    <div className="section-wrapper">
    				<div className="grid__container">
                        <div className="grid__row">
                            <div className="grid__column--one-half">
                                <h3>A Little About Myself</h3>
                                <p className="section__content">
                                    Hi! Welcome to my personal website! After 10 years of working in the passsenger vessel industry as a Captain, I decided to change careers to become a web developer with a focus on front end development using the latest technologies.  
                                </p>
                                <p className="section__content">
                                    Continue reading if you would like to learn more about me and how I got into web development. I have had a very unique career, and I encourage you to get to know me as both a developer and as a person.
                                </p>
                                <p className="section__content section__content--bold">
                                    If you want to see what I've done in my career, click <Link to="/resume">here</Link>.
                                </p>
                                <p className="section__content section__content--bold">
                                    If you want to see some projects I've worked on, click <Link to="/portfolio">here</Link>.
                                </p>
                            </div>
                            <div className="grid__column--one-half">
                                <img src={bioPic} alt="Tim Lisiecki" className="bio__pic bio__pic--1" />
                                <img src={bioPic2} alt="Tim Lisiecki" className="bio__pic bio__pic--2" />
                            </div>
                        </div>
                    </div>
    			</div>
    			<div className="section-wrapper section-wrapper--grey">
    				<div className="grid__container">
                        <h3 className="section__title">Before I Got Into Web Development</h3>
                        <div className="grid__row">
                            <div className="grid__column--twelve">
                                <p className="section__content">
                                    My first career after graduating high school started in a unique industry. In April 2009, I started working as a deckhand for Mass Bay Lines, a family-owned business operating boats in Boston Harbor. By April 2010, I had earned my captain's license.
                                </p>
                                <p className="section__content">
                                    After working as a captain for about 2 years and gaining hands-on managerial experience, I decided to pursue a degree in Management from University of Massachusetts - Boston. In May 0f 2015, I graduated with a B.S. in Management with a concentration in Marketing.
                                </p>
                            </div>        
                        </div>
                        <h3 className="section__title">How I Got Into Web Development</h3>
                        <div className="grid__row">
                            <div className="grid__column--twelve">
                                <p className="section__content">
                                    I was first introduced to web development while in my senior year of college in 2015. I had read an article talking about the benefits of learning coding if you are pursuing a career in business, no matter which field (accounting, financing, marketing, etc..) you were interested in. The article listed a few free websites that taught coding, including Codecademy. Since I had a concentration in Marketing, I took the HTML and CSS courses on Codecademy, and immediately found a passion for coding. 
                                </p>
                                <p className="section__content">
                                    Although I continued working as a captain and eventually as a manager following graduation, I continued to learn coding and expanding my web development skillset in my free time. Eventually, I was able to incorporate those skills with my position as Web Marketing Manager at Mass Bay Lines, taking over managing the website. I knew then that I wanted to officially switch careers to being a front end web developer.
                                </p>
                            </div>        
                        </div>
                        <h3 className="section__title">Starting My Own (part-time) Business</h3>
                        <div className="grid__row">
                            <div className="grid__column--twelve">
                                <p className="section__content">
                                    In September of 2018, I started my own part-time business, Blue Collar Coding, building and managing Wordpress websites for small businesses as well as offering SEO services. This helped me gain even more experience in developing a project fro mstart to finish, as well as maintaining projects after completion. 
                                </p>
                            </div>        
                        </div>
                        <h3 className="section__title">Changing Careers</h3>
                        <div className="grid__row">
                            <div className="grid__column--twelve">
                                <p className="section__content">
                                    In December of 2018, I was finally able to switch my career to web development full-time when I started working as a web developer at a moving software company. I was able to get valuable exposure to JavaScript frameworks and gain experience building custom websites for companies.
                                </p>
                            </div>        
                        </div>
                        <h3 className="section__title">Career Goals</h3>
                        <div className="grid__row">
                            <div className="grid__column--twelve">
                                <p className="section__content">
                                    Although I am still at the beginning of my career in web development, I am excited for what is to come. I hope to eventually become a Senior Developer in order to lead and teach other developers. Check out the <Link to="/resources">Resources page</Link> to see all the courses and materials I've used to get to this point. 
                                </p>
                                <p className="section__content">
                                    Currently, I am learning the skills to become a Senior Web Developer using the most current technologies, and hope to apply those skills to website, web applications, and software.
                                </p>
                            </div>        
                        </div>
                        <h4 className="section__title">TL;DR</h4>
                        <div className="grid__row">
                            <div className="grid__column--twelve">
                                <p className="section__content">
                                    Started my first career in 2009 as a boat captain on Boston Harbor. In 2015, while earning a degree in Management/Marketing from UMass Boston, I started learning web development in my free time. After a few years of learning, freelancing, and building projects, I switched careers from being a full-time boat captain to being a full-time web developer in December 2018! As far as career goals, I hope to become a senior developer within the next few years in order to teach/guide junior developers in similar shoes as I am in now.
                                </p>
                            </div>        
                        </div>
                    </div>
    			</div>
			</div>
		);
	}
}

export default AboutPage;
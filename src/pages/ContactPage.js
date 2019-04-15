// Dependencies
import React, { Component } from 'react';

// Components
import SubpageHero from '../components/Hero/SubpageHero';

// Assets
import '../assets/responsive-grid.css';
import './ContactPage.css';

class ContactPage extends Component {

	render() {
		return (
			<div className="page-content">
				<SubpageHero title="Contact"/>
    			<div className="section-wrapper section-wrapper--grey">
    				<div className="grid__container">
                        <h1 className="section__title">Connect</h1>
                        <div className="grid__row">
                            <p className="section__content">
                                Thanks for visiting my personal website. I hope you got a chance to learn a little about me and what I have done in my career.
                            </p>
                            <p className="section__content">
                                If you are looking to hire a front end web developer, make sure to connect with me! We can see if I would be a good fit for the position, or at the very least make a professional connection.
                            </p>
                        </div>
                        <div className="grid__row">
                            <div className="connect-features features--mt">
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
    			</div>
			</div>
		);
	}
}

export default ContactPage;
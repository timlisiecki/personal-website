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

export default ContactPage;
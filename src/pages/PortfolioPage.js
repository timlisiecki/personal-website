// Dependencies
import React, { Component } from 'react';
import { data } from '../data';

// Components
import SubpageHero from '../components/Hero/SubpageHero';
import Button from '../components/Button/Button';

// Assets
import '../assets/responsive-grid.css';
import './HomePage.css';
import bccPic from '../images/bcc.png';

class PortfolioPage extends Component {



	render() {
		return (
			<div className="page-content">
				<SubpageHero title="Portfolio"/>
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
                        <Button>Check Out More</Button>
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

export default PortfolioPage;
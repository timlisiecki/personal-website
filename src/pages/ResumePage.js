// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Timeline } from 'vertical-timeline-component-for-react';
import { data } from '../api/data';

// Components
import SubpageHero from '../components/Hero/SubpageHero';
import ResumeList from '../components/Timeline/ResumeList';

// Assets
import '../assets/responsive-grid.css';
import './ResumePage.css';

class ResumePage extends Component {
	render() {
		return (
			<div className='page-content'>
				<SubpageHero title='Resume' />
				<div className='section-wrapper'>
					<div className='grid__container'>
						<div className='grid__row'>
							<h2 className='section__title'>Profile</h2>
							<p className='section__content'>
								Currently the full-stack Web Developer at Threat Stack, Inc. Self-taught web developer since 2016. After 10 years as a
								licensed boat captain in the passenger vessel industry, and learning web development in my free time since 2016, I
								switched to web development as a full-time career in December of 2018. In September 2018, I started my own part­-time
								freelance business, Blue Collar Coding, developing and managing websites and web apps for small businesses. Currently
								dedicating ~15 hours a week learning and practicing software engineering in order to level up in my career. Seeking a
								software engineer or similar role with a focus on Javascript engineering.
							</p>
						</div>
					</div>
				</div>
				<div className='section-wrapper section-wrapper--grey'>
					<div className='grid__container'>
						<h2 className='section__title'>Skills</h2>
						<ul className='skills__list'>
							<li>React</li>
							<li>Redux</li>
							<li>Node.js</li>
							<li>Express</li>
							<li>HTML</li>
							<li>CSS</li>
							<li>Javascript (ES6+)</li>
							<li>Webpack</li>
							<li>PHP</li>
							<li>SASS</li>
							<li>BEM</li>
							<li>REST API</li>
							<li>AJAX</li>
							<li>Git</li>
							<li>Wordpress</li>
						</ul>
					</div>
				</div>
				<div className='section-wrapper'>
					<div className='grid__container'>
						<h2 className='section__title'>Employment History</h2>
						<Timeline lineColor={'#418e42'}>
							<ResumeList data={data.jobs} />
						</Timeline>
					</div>
				</div>
				<div className='section-wrapper section-wrapper--grey'>
					<div className='grid__container'>
						<h2 className='section__title'>Education</h2>
						<ul className='education__list'>
							<li>
								<h4>B.S. Management, Marketing</h4>
								<h5>University of Massachusetts - Boston | May 2015</h5>
							</li>
							<li>
								See <Link to='/resources'>Resources page</Link> for courses taken for web development and software engineering.
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default ResumePage;

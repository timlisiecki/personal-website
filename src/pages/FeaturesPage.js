// Dependencies
import React, { Component } from 'react';

// Components
import SubpageHero from '../components/Hero/SubpageHero';

// Assets
import '../assets/responsive-grid.css';
import './FeaturesPage.css';
import techPic from '../images/webdev.png';

class FeaturesPage extends Component {
	render() {
		return (
			<div className='page-content'>
				<SubpageHero title='Features' />
				<div className='section-wrapper'>
					<div className='grid__container'>
						<div className='grid__row grid__column--one-half'>
							<div className='m-auto max-width-100'>
								<h1 className='section__title'>Overview</h1>
								<p className='section__content'>
									This page explains all the features of this website, from how it was built to the technologies used, all in order
									to showcase all of the skills I have learned.
								</p>
							</div>
							<div className='m-auto max-width-100'>
								<img src={techPic} alt='Web Development Languages' className='features__pic' />
							</div>
						</div>
					</div>
				</div>
				<div className='section-wrapper section-wrapper--grey'>
					<div className='grid__container'>
						<h1 className='section__title'>Core Features</h1>
						<div className='grid__row'>
							<div className='grid__column--twelve'>
								<h3 className='section__subtitle'>React</h3>
								<p className='section__content'>
									Starting with Create React App to boostrap this website as a single-page application, each componet was created
									from scratch. Each page was created as a component, using React Router to bring it all together.
								</p>
							</div>
							<div className='grid__column--twelve'>
								<h3 className='section__subtitle'>Built From Scratch</h3>
								<p className='section__content'>
									From each React Component to all of the CSS including the responsive grid, I built almost everything on this
									website from scratch. It has become very easy to use templates, libraries, and frameworks (like Bootstrap) that
									other developers have created, but it also easy to not fully understand how they work. By building the website
									from scratch, I not only can show that I know how everything works, but I also learned many new skills.
								</p>
							</div>
							<div className='grid__column--twelve'>
								<h3 className='section__subtitle'>Progressive Web App</h3>
								<p className='section__content'>
									This website is a Progressive Web App! You can turn off your wifi and reload the page, and it will still load.
									Also, you can add this website to your mobile home-screen as an app! Why would I need to do all this for a
									personal website? I don't. But Progressive Web Apps are starting to become an alternative to mobile apps and it's
									a great skill to learn now.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='section-wrapper'>
					<div className='grid__container'>
						<h1 className='section__title'>Styling</h1>
						<div className='grid__row'>
							<div className='grid__column--twelve'>
								<h3 className='section__subtitle'>CSS</h3>
								<p className='section__content'>
									All CSS is <strong>built from scratch</strong>!
								</p>
							</div>
							<div className='grid__column--twelve'>
								<h3 className='section__subtitle'>BEM Methodology</h3>
								<p className='section__content'>
									Used the Block Element Modifier (BEM) methodology to code all the CSS, keeping consistent with the "resusable
									component" mindset of React.
								</p>
							</div>
							<div className='grid__column--twelve'>
								<h3 className='section__subtitle'>Responsive Web Design</h3>
								<p className='section__content'>
									Coded a responsive grid system <strong>from scratch</strong>! Check out the responsive-grid.css file in the Github
									repository.
								</p>
							</div>
							<div className='grid__column--twelve'>
								<h3 className='section__subtitle'>Flexbox and Grid</h3>
								<p className='section__content'>Using flex box and grid displays as much as possible for positioning of elements.</p>
							</div>
						</div>
					</div>
				</div>
				<div className='section-wrapper section-wrapper--grey'>
					<div className='grid__container'>
						<h1 className='section__title'>Tools</h1>
						<div className='grid__row'>
							<div className='grid__column--twelve'>
								<h3 className='section__subtitle'>Git</h3>
								<p className='section__content'>
									Git was used for version control, using branches to create new features and then merging with the master branch.
								</p>
							</div>
							<div className='grid__column--twelve'>
								<h3 className='section__subtitle'>Webpack</h3>
								<p className='section__content'>Webpack comes standard with Create Reeact App!</p>
							</div>
						</div>
					</div>
				</div>
				<div className='section-wrapper'>
					<div className='grid__container'>
						<h1 className='section__title'>Features in the Works</h1>
						<div className='grid__row'>
							<div className='grid__column--twelve'>
								<h3 className='section__subtitle'>Complete Site Redesign</h3>
								<p className='section__content'>
									I am currently working on a newer version of this site using MERN stack. Some features include dark mode, activity
									feed, 3rd-party REST API integrations, ability to sahres posts and resources, tags functionality, and more! Stay
									tuned!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FeaturesPage;

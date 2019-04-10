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
			<div className="page-content">
				<SubpageHero title="Features"/>
			    <div className="section-wrapper">
    				<div className="grid__container">
                        <div className="grid__row">
                            <div className="grid__column--one-third">
                                <h1>Overview</h1>
                                <p>
                                    This page explains all the features of this website, from how it was built to the technologies used, all in order to showcase all of the skills I have learned.
                                </p>
                                <p>
                                    Interested to see how my website performs? Test this website in Lighthouse for yourself: See Report 
                                </p>
                            </div>
                            <div className="grid__column--two-thirds">
                                <img src={techPic} alt="Web Development Languages" className="features__pic" />
                            </div>
                        </div>
                    </div>
    			</div>
    			<div className="section-wrapper section-wrapper--grey">
    				<div className="grid__container">
                        <h1>Core Features</h1>
                        <div className="grid__row">
                            <div className="grid__column--twelve">
                                <h3>React</h3>
                                <p>Starting with Create React App to boostrap this website as a single-page application, each componet was created from scratch. Each page was created as a component, using React Router to bring it all together.</p>
                            </div>               
                            <div className="grid__column--twelve">
                                <h3>Built From Scratch</h3>
                                <p>From each React Component to all of the CSS including the responsive grid, I built almost everything on this website from scratch. It has become very easy to use templates, libraries, and frameworks (like Bootstrap) that other developers have created, but it also easy to not fully understand how they work. By building the website from scratch, I not only can show that I know how everything works, but I also learned many new skills.</p>
                            </div>               
                            <div className="grid__column--twelve">
                                <h3>Progressive Web App</h3>
                                <p>This website is a Progressive Web App! You can turn off your wifi and reload the page, and it will still load. Also, you can add this website to your mobile home-screen as an app! Why would I need to do all this for a personal website? I don't. But Progressive Web Apps are starting to become an alternative to mobile apps and it's a great skill to learn now.</p>
                            </div>
                        </div>
                    </div>
    			</div>
    			<div className="section-wrapper">
					<div className="grid__container">
                        <h1>Styling</h1>
                        <div className="grid__row">
                            <div className="grid__column--twelve">
                                <h3>CSS</h3>
                                <p>All CSS is <strong>built from scratch</strong>!</p>
                            </div>               
                            <div className="grid__column--twelve">
                                <h3>BEM Methodology</h3>
                                <p>Used the Block Element Modifier (BEM) methodology to code all the CSS, keeping consistent with the "resusable component" mindset of React.</p>
                            </div>               
                            <div className="grid__column--twelve">
                                <h3>Responsiven Web Design</h3>
                                <p>Coded a responsive grid system <strong>from scratch</strong>! Check out the responsive-grid.css file in the Github repository.</p>
                            </div> 
                            <div className="grid__column--twelve">
                                <h3>Flexbox</h3>
                                <p>Using flex box as much as possible for positioning of elements.</p>
                            </div>              
                        </div>
                    </div>
    			</div>
    			<div className="section-wrapper section-wrapper--grey">
    				<div className="grid__container">
                        <h1>Tools</h1>
                        <div className="grid__row">
                            <div className="grid__column--twelve">
                                <h3>Git</h3>
                                <p>Git was used for version control, using branches to create new feeatures and then merging with the master branch.</p>
                            </div>               
                            <div className="grid__column--twelve">
                                <h3>Webpack</h3>
                                <p><em>Coming Soon</em></p>
                            </div>              
                        </div>
                    </div>
    			</div>
                <div className="section-wrapper">
                    <div className="grid__container">
                        <h1>Features in the Works</h1>
                        <div className="grid__row">
                            <div className="grid__column--twelve">
                                <h3>SASS</h3>
                                <p><em>Coming Soon</em> - CSS preprocessor.</p>
                            </div>               
                            <div className="grid__column--twelve">
                                <h3>Redux</h3>
                                <p><em>Coming Soon</em> - State management for React components.</p>
                            </div>              
                        </div>
                    </div>
                </div>
			</div>
		);
	}
}

export default FeaturesPage;
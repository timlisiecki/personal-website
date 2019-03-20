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
                        <h4>Features of This Website:</h4>
    					<div className="site-features">
    						<p >Mobile Responsive</p>
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
                                    <h4>Title</h4>
                                    <p>Description</p>
                                </div>
                            </div>               
                            <div className="grid__column--one-third">
                                <div>
                                    <h4>Title</h4>
                                    <p>Description</p>
                                </div>
                            </div>               
                            <div className="grid__column--one-third">
                                <div>
                                    <h4>Title</h4>
                                    <p>Description</p>
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
                                </div>
                            </div>               
                            <div className="grid__column--one-third">
                                <div>
                                    <img src={bccPic} alt="card" className="project__featured-image" />
                                    <h4>Title</h4>
                                    <p>Description</p>
                                </div>
                            </div>               
                            <div className="grid__column--one-third">
                                <div>
                                    <img src={bccPic} alt="card" className="project__featured-image" />
                                    <h4>Title</h4>
                                    <p>Description</p>
                                </div>
                            </div>               
                        </div>
                        <Button>See More</Button>
                    </div>
    			</div>
    			<div className="section-wrapper section-wrapper--grey">
    				<h1>Connect</h1>
    				<p>
    					Write brief about me. Add a "See More" button. Spicy jalapeno bacon ipsum dolor amet adipisicing ham hock chicken fugiat ball tip reprehenderit. Pastrami cupim velit turkey, in kevin ribeye. Occaecat veniam anim non in pork belly tri-tip ribeye shank drumstick andouille. Leberkas fugiat dolor biltong, filet mignon qui jowl. Filet mignon alcatra biltong beef ribs, bresaola tail cillum enim consequat meatball in. Drumstick consequat ipsum tongue. Eiusmod dolore cow, quis aute ut ipsum bresaola nulla est spare ribs boudin.
    				</p>
    			</div>
			</div>
		);
	}
}

export default HomePage;
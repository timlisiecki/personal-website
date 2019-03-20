import React, { Component } from 'react';

import Hero from '../components/Hero/Hero';
import Button from '../components/Button/Button';

import './HomePage.css';
import bioPic from '../images/timlisiecki.jpg';

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
    				<div class="row">
    					<div className="column__one-half">
                            <h1>About Me</h1>
                            <p>
                                Hi! Welcome to my personal website! After 10 years of working in the passsenger vessel industry as a Captain, I decided to change careers to become a web developer with a focus on front end development using the latest technologies.  
                            </p>
                            <Button>Learn More</Button>
                        </div>
                        <div className="column__one-half">
                            <img src={bioPic} alt="Tim Lisiecki" className="about__pic" />
                        </div>
    				</div>
    			</div>
    			<div className="section-wrapper section-wrapper--grey">
    				<h1>Skillset</h1>
    				<ul>
    					<li>HTML</li>
    					<li>CSS</li>
    					<li>JavaScript</li>
    					<li>React</li>
    					<li>Git</li>
    					<li>Bootstrap</li>
    				</ul>
                    <Button>More</Button>
    			</div>
    			<div className="section-wrapper">
					<h1>Featured Projects</h1>
					<p>
						Write brief about me. Add a "See More" button. Spicy jalapeno bacon ipsum dolor amet adipisicing ham hock chicken fugiat ball tip reprehenderit. Pastrami cupim velit turkey, in kevin ribeye. Occaecat veniam anim non in pork belly tri-tip ribeye shank drumstick andouille. Leberkas fugiat dolor biltong, filet mignon qui jowl. Filet mignon alcatra biltong beef ribs, bresaola tail cillum enim consequat meatball in. Drumstick consequat ipsum tongue. Eiusmod dolore cow, quis aute ut ipsum bresaola nulla est spare ribs boudin.
					</p>
                    <Button>See More</Button>
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
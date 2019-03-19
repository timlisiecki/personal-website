import React, { Component } from 'react';

import Hero from '../components/Hero/Hero';

import './HomePage.css';

class HomePage extends Component {

	render() {
		return (
			<div className="home-content">
				<Hero />
			    <div className="section-wrapper">
    				<div className="site-features__wrapper">
    					<div>
    						<p className="site-features">
    							Mobile Responsive | Progressive Web App | Built with React | BEM Methodology
    						</p>
    					</div>
    				</div>
    				<div>
    					<h1>About Me</h1>
    					<p>
    						Write brief about me. Add a "See More" button. Spicy jalapeno bacon ipsum dolor amet adipisicing ham hock chicken fugiat ball tip reprehenderit. Pastrami cupim velit turkey, in kevin ribeye. Occaecat veniam anim non in pork belly tri-tip ribeye shank drumstick andouille. Leberkas fugiat dolor biltong, filet mignon qui jowl. Filet mignon alcatra biltong beef ribs, bresaola tail cillum enim consequat meatball in. Drumstick consequat ipsum tongue. Eiusmod dolore cow, quis aute ut ipsum bresaola nulla est spare ribs boudin.
    					</p>
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
    			</div>
    			<div className="section-wrapper">
					<h1>Featured Projects</h1>
					<p>
						Write brief about me. Add a "See More" button. Spicy jalapeno bacon ipsum dolor amet adipisicing ham hock chicken fugiat ball tip reprehenderit. Pastrami cupim velit turkey, in kevin ribeye. Occaecat veniam anim non in pork belly tri-tip ribeye shank drumstick andouille. Leberkas fugiat dolor biltong, filet mignon qui jowl. Filet mignon alcatra biltong beef ribs, bresaola tail cillum enim consequat meatball in. Drumstick consequat ipsum tongue. Eiusmod dolore cow, quis aute ut ipsum bresaola nulla est spare ribs boudin.
					</p>
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
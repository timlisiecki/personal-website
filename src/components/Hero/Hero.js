// Dependencies
import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';

// Styles
import './Hero.css';

class Hero extends Component {

	render() {
		return (
			<div className="hero-image">
				<LazyHero
					color="#418e42" 
					imageSrc="https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
					minHeight="97vh"
					opacity={0.5}
					parallaxOffset={100}
				>
					<h1 className="hero__title">Tim Lisiecki</h1>
					<h2 className="hero__subtitle">Front End Web Developer</h2>
				</LazyHero>
			</div>
		);
	}
}

export default Hero;


// https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
// ../../images/webdev-bg.jpg
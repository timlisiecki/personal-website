// Dependencies
import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';

// Styles
import './Hero.css';
import heroImage from '../../images/webdev-bg.jpg';

class Hero extends Component {

	render() {
		return (
			<div className="hero-image">
				<LazyHero
					color="#418e42" 
					imageSrc={heroImage}
					minHeight="97vh"
					opacity={0.5}
					parallaxOffset={200}
				>
					<h1 className="hero__title">Tim Lisiecki</h1>
					<h2 className="hero__subtitle">Front End Web Developer</h2>
				</LazyHero>
			</div>
		);
	}
}

export default Hero;

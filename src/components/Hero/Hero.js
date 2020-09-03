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
					<h2 className="hero__subtitle">Full Stack Web Developer</h2>
					<p className="hero__announcement">
						<strong>
							<em>Stay tuned!</em>
						</strong>{' '}
						New site in development utilizing MERN stack! Features include dark mode,
						activity feed, 3rd-party APIs, and more!
					</p>
				</LazyHero>
			</div>
		);
	}
}

export default Hero;

// Dependencies
import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';

// Styles
import './SubpageHero.css';
import heroImage from '../../images/webdev-bg.jpg';

class SubpageHero extends Component {

	render() {
		return (
			<div className="subpage-hero-image">
				<LazyHero
					color="#418e42" 
					imageSrc={heroImage}
					minHeight="40vh"
					opacity={0.5}
					parallaxOffset={200}
				>
					<h1 className="subpage-hero__title">{this.props.title}</h1>
				</LazyHero>
			</div>
		);
	}
}

export default SubpageHero;

// Dependencies
import React from 'react';

// Components

// Styles
import './Card.css';

const Card = ({ name, image, desc, url, github, tech, linkText }) => {
	return (
		<div className="grid__column--one-third">
			<div className="card">
				<h4 className="card__title">{name}</h4>
				<img src={image} alt="card" className="project__featured-image" />
				<p className="card__content">{desc}</p>
				<ul className="card__content card__tech">
					{tech}
				</ul>
				<span className="card__icon">
		            <a href={url} target="_blank" rel="noopener noreferrer">
		                <i className="fas fa-external-link-alt"></i>
		            </a>
		        </span>
		        {
		        	github ? (
				    		<span className="card__icon">
					            <a href={github} target="_blank" rel="noopener noreferrer">
					                <i className="fab fa-github"></i>
					            </a>
					        </span>
				    ) : null
		        }
			</div>
		</div>
	);
}

export default Card;
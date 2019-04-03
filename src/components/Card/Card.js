// Dependencies
import React from 'react';

// Components
import Button from '../Button/Button';

// Styles
import './Card.css';

const Card = ({ name, image, desc, url, tech, linkText }) => {
	return (
		<div className="grid__column--one-third">
			<div className="card">
				<h4 className="card__title">{name}</h4>
				<img src={image} alt="card" className="project__featured-image" />
				<p className="card__content">{desc}</p>
				<ul className="card__content card__tech">
					{tech}
				</ul>
				<a href={url} target="_blank" rel="noopener noreferrer">
					<Button>{linkText}</Button>
				</a>
			</div>
		</div>
	);
}

export default Card;
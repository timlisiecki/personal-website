// Dependencies
import React from 'react';

// Components
import Button from '../Button/Button';

// Styles
import './HorizontalCard.css';

const HorizontalCard = ({ title, image, author, url, type, linkText }) => {

	return (
		<div className="horizontal-card">
			<div className="grid__row">
            <div className="grid__column--one-fourth">
                <img src={image} alt="card" className="project__featured-image" />
            </div>
            <div className="grid__column--three-fourths">
                <p className="horizontal-card__title">{title} <span className="horizontal-card__subtitle">by {author}</span></p>
                <p className="horizontal-card__category">Category: <em>{type}</em></p>
                <a href={url} target="_blank" rel="noopener noreferrer">
					<Button>{linkText}</Button>
				</a>
            </div>
        </div>
		</div>
	);
}

export default HorizontalCard;
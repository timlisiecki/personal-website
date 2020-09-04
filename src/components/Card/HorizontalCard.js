// Dependencies
import React from 'react';

// Components
import Button from '../Button/Button';

// Styles
import './HorizontalCard.css';

const HorizontalCard = ({ title, image, author, url, type, linkText }) => {
	return (
		<div className="horizontal-card flex__row m-auto max-width-100">
			<img src={image} alt="card" className="horizontal-card__image flex-basis--25" />
			<div className="horizontal-card__content">
				<p className="horizontal-card__title">
					{title} <span className="horizontal-card__subtitle">by {author}</span>
				</p>
				<p className="horizontal-card__category">
					Category: <em>{type}</em>
				</p>
				<a href={url} target="_blank" rel="noopener noreferrer">
					<Button classModifier={'button--green button--small button--mt-medium'}>
						{linkText}
					</Button>
				</a>
			</div>
		</div>
	);
};

export default HorizontalCard;

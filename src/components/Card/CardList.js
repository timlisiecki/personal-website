// Dependencies
import React from 'react';

// Components
import Card from './Card';

// Styles

const CardList = ( { isFeatured, data } ) => {

	const featuredCards = data.filter( card => card.featured ).map((card, i) => {
			return (
				<Card 
					key={i}
					name={card.name} 
					image={card.image}
					desc={card.desc}
					tech={card.tech.map((category, j) => {
						return (
							<li key={j} className="card__tech-list-item">{card.tech[j]}</li>
						);
					})}
					url={card.url}
					github={card.github}
					linkText="View"
				/>
			);
		});

	const cards = data.filter( card => !card.featured ).map((card, i) => {
			return (
				<Card 
					key={i}
					name={card.name} 
					image={card.image}
					desc={card.desc}
					tech={card.tech.map((category, j) => {
						return (
							<li key={j} className="card__tech-list-item">{card.tech[j]}</li>
						);
					})}
					url={card.url}
					github={card.github}
					linkText="View"
				/>
			);
		});

	return <div>{ isFeatured ? featuredCards : cards }</div>;
}

export default CardList;
// Dependencies
import React from 'react';

// Components
import Card from './Card';

// Styles


const CardList = ( { isFeatured, data } ) => {

	const featuredCards = data.filter( card => card.featured )
		.map((card, i) => {
			return (
				<Card 
					key={i}
					name={data[i].name} 
					image={data[i].image}
					desc={data[i].desc}
					tech={data[i].tech.map((category, j) => {
						return (
							<li key={j} className="card__tech-list-item">{data[i].tech[j]}</li>
						);
					})}
					url={data[i].url}
					linkText="View"
				/>
			);
		});

	const cards = data.filter( card => !card.featured )
		.map((card, i) => {
			return (
				<Card 
					key={i}
					name={data[i].name} 
					image={data[i].image}
					desc={data[i].desc}
					tech={data[i].tech.map((category, j) => {
						return (
							<li key={j} className="card__tech-list-item">{data[i].tech[j]}</li>
						);
					})}
					url={data[i].url}
					linkText="View"
				/>
			);
		});

	const example = data.filter( card => card.featured ).map((card, i) => data[i]);
	const example2 = data.filter( card => !card.featured ).map((card, i) => data[i]);
	const example3 = data.map((card, i) => data[i]).filter( card => card.featured );
	const example4 = data.map((card, i) => data[i]).filter( card => !card.featured );

	console.log(data.filter(card => card.featured));
	console.log("Filter first - featured cards");
	console.log(example);
	console.log("Filter first - normal cards");
	console.log(example2);
	console.log("Map first - featured cards");
	console.log(example3);
	console.log("Map first - normal cards");
	console.log(example4);
	return <div>{ isFeatured ? featuredCards : cards }</div>;
}

export default CardList;
// Dependencies
import React from 'react';

// Components
import HorizontalCard from './HorizontalCard';

// Styles

const HorizontalCardList = ( { category, isFeatured, data } ) => {
	
	const featuredCards = data.filter( card => card.featured ).map((card, i) => {
			return (
				<HorizontalCard 
					key={i}
					title={card.title}
					author={card.author}
					image={card.image}
					url={card.url}
					type={card.type}
					linkText="More Info"
				/>
			);
		});

	const booksList = data.filter( card => card.type === "Book" ).map((card, i) => {
			return (
				<HorizontalCard 
					key={i}
					title={card.title}
					author={card.author}
					image={card.image}
					url={card.url}
					type={card.type}
					linkText="More Info"
				/>
			);
		});

	const courseList = data.filter( card => card.type === "Course" ).map((card, i) => {
			return (
				<HorizontalCard 
					key={i}
					title={card.title}
					author={card.author}
					image={card.image}
					url={card.url}
					type={card.type}
					linkText="More Info"
				/>
			);
		});

	let listType;
	if (isFeatured) {
		listType = featuredCards;
	} else if (category === "books") {
		listType = booksList;
	} else if (category === "courses") {
		listType = courseList;
	} else {
		return <p>Something went wrong...</p>
	}

	return <div>{listType}</div>;
	
}

export default HorizontalCardList;
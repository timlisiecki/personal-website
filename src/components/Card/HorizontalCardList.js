// Dependencies
import React from 'react';

// Components
import HorizontalCard from './HorizontalCard';

// Styles

const HorizontalCardList = ( { category, isFeatured, data } ) => {
	if (isFeatured) {
		return (
			<div>
				{
					data.map((resource, i) => {
						if (data[i].featured) {
							return (
								<HorizontalCard 
									key={i}
									title={data[i].title}
									author={data[i].author}
									image={data[i].image}
									url={data[i].url}
									type={data[i].type}
									linkText="More Info"
								/>
							);
						}	
					})
				}
			</div>
		);
	} 

	if (category === "book") {
		return (
			<div>
				{
					data.map((resource, i) => {
						if (data[i].type === "Book") {
							return (
								<HorizontalCard 
									key={i}
									title={data[i].title}
									author={data[i].author}
									image={data[i].image}
									url={data[i].url}
									type={data[i].type}
									linkText="More Info"
								/>
							);
						}	
					})
				}
			</div>
		);
	} else if (category === "course") {
		return (
			<div>
				{
					data.map((resource, i) => {
						if (data[i].type === "Course") {
							return (
								<HorizontalCard 
									key={i}
									title={data[i].title}
									author={data[i].author}
									image={data[i].image}
									url={data[i].url}
									type={data[i].type}
									linkText="More Info"
								/>
							);
						}	
					})
				}
			</div>
		);
	} else {
		return <p>Something isn't right...</p>
	}
	
};

export default HorizontalCardList;
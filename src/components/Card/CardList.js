// Dependencies
import React from 'react';

// Components
import Card from './Card';

// Styles


const CardList = ( { featured, data } ) => {
	if (featured) {
		return (
			<div>
				{
					data.map((project, i) => {
						if (data[i].featured) {
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
						}
					})
				}
			</div>
		);
	} else if (!featured) {
		return (
			<div>
				{
					data.map((project, i) => {
						if (!data[i].featured) {
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
						}
					})
				}
			</div>
		);
	} else {
		return <p>Something isn't right...</p>
	}
};

export default CardList;

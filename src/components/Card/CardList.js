import React from 'react';

import Card from './Card';

// Styles
import './Card.css';
import bccPic from '../../images/bcc.png';

const CardList = ( { data } ) => {
	return (
		<div>
			{
				data.map((project, i) => {
					return (
						<Card 
							key={i}
							name={data[i].name} 
							image={data[i].image}
							desc={data[i].desc}
							tech={data[i].tech.map((category, j) => {
								return (
									<li key={j} className="card__categories-list-item">{data[i].tech[j]}</li>
								);
							})}
							url={data[i].url}
							linkText="View"
						/>
					);
				})
			}
		</div>
	);
};

export default CardList;
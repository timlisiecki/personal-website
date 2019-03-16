import React from 'react';

import './Content.css';

const Content = (props) => {
	return (
		<div className="content-wrapper">
			{props.children}
		</div>
	);
}

export default Content;
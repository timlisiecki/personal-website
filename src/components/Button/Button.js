import React, { Component } from 'react';

import './Button.css';

class Button extends Component {
	/* constructor() {
			super();
			this.state = {
				
			}
		} */

	render() {
		return (
			<button className="button">{ this.props.children }</button>
		);
	}
}

export default Button;
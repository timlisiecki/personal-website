import React, { Component } from 'react';

import './Logo.css';

class Logo extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
		return <h1 className="navbar__logo">TIM LISIECKI</h1>
	}
}

export default Logo;
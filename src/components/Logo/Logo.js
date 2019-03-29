import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import './Logo.css';

class Logo extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
		return (
			<h1 className="navbar__logo"><NavLink exact to="/">Tim Lisiecki</NavLink></h1>
		);
	}
}

export default Logo;
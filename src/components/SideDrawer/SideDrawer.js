import React from 'react';
import { NavLink } from "react-router-dom";

import './SideDrawer.css';

const SideDrawer = props => {
	let drawerClasses = "side-drawer";
	if (props.show) {
		drawerClasses = "side-drawer open";
	}

	return (
		<nav className={drawerClasses}>
			<ul className="side-drawer__ul">
				<li className="side-drawer__list-item"><NavLink to="/about">About Me</NavLink></li>
				<li className="side-drawer__list-item"><NavLink to="/resume">Resume</NavLink></li>
				<li className="side-drawer__list-item"><NavLink to="/portfolio">Portfolio</NavLink></li>
				<li className="side-drawer__list-item"><NavLink to="/features">Features</NavLink></li>
				<li className="side-drawer__list-item"><NavLink to="/resources">Resources</NavLink></li>
				<li className="side-drawer__list-item"><NavLink to="/contact">Contact</NavLink></li>
			</ul>
		</nav>
	);
}

export default SideDrawer;
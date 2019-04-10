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
				<li className="side-drawer__list-item"><NavLink to="/" onClick={props.navlinkClickHandler}>Home</NavLink></li>
				<li className="side-drawer__list-item"><NavLink to="/about" onClick={props.navlinkClickHandler}>About Me</NavLink></li>
				<li className="side-drawer__list-item"><NavLink to="/resume" onClick={props.navlinkClickHandler}>Resume</NavLink></li>
				<li className="side-drawer__list-item"><NavLink to="/portfolio" onClick={props.navlinkClickHandler}>Portfolio</NavLink></li>
				<li className="side-drawer__list-item"><NavLink to="/features" onClick={props.navlinkClickHandler}>Features</NavLink></li>
				<li className="side-drawer__list-item"><NavLink to="/resources" onClick={props.navlinkClickHandler}>Resources</NavLink></li>
				<li className="side-drawer__list-item"><NavLink to="/contact" onClick={props.navlinkClickHandler}>Contact</NavLink></li>
			</ul>
		</nav>
	);
}

export default SideDrawer;
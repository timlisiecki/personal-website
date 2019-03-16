import React from 'react';

import './SideDrawer.css';

const SideDrawer = props => {
	let drawerClasses = "side-drawer";
	if (props.show) {
		drawerClasses = "side-drawer open";
	}

	return (
		<nav className={drawerClasses}>
			<ul className="side-drawer__ul">
				<li className="side-drawer__list-item"><a href="/">About Me</a></li>
				<li className="side-drawer__list-item"><a href="/">Resume</a></li>
				<li className="side-drawer__list-item"><a href="/">Portfoliio</a></li>
				<li className="side-drawer__list-item"><a href="/">Features</a></li>
				<li className="side-drawer__list-item"><a href="/">Resources</a></li>
				<li className="side-drawer__list-item"><a href="/">Contact</a></li>
			</ul>
		</nav>
	);
}

export default SideDrawer;
import React, { Component } from 'react';
import { HashRouter as Router, NavLink } from "react-router-dom";

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Logo from '../Logo/Logo';
import './Navbar.css';

class Navbar extends Component {
	constructor() {
		super();
		this.state = {
			bgColor: 'none'
		};
	}

	listenScrollEvent = e => {
		if (window.scrollY > 100) {
			this.setState({bgColor: '#418e42'});
		} else {
			this.setState({bgColor: 'none'});
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.listenScrollEvent)
	}


	render() {
		return (
			<Router>
				<header className="navbar navbar--clearfix" style={{background: this.state.bgColor}}>
					<div className="navbar__hamburger">
						<DrawerToggleButton click={this.props.drawerClickHandler} />
					</div>
					<nav className="navbar__nav">
						<div className="navbar__ul--left">
							<ul className="navbar__ul">
								<li className="navbar__list-items"><NavLink to="/about">About Me</NavLink></li>
								<li className="navbar__list-items"><NavLink to="/resume">Resume</NavLink></li>
								<li className="navbar__list-items"><NavLink to="/portfolio">Portfolio</NavLink></li>
							</ul>
						</div>
						<Logo />
						<div className="navbar__ul--right">
							<ul className="navbar__ul">
								<li className="navbar__list-items"><NavLink to="/features">Features</NavLink></li>
								<li className="navbar__list-items"><NavLink to="/resources">Resources</NavLink></li>
								<li className="navbar__list-items"><NavLink to="/contact">Contact</NavLink></li>
							</ul>
						</div>
					</nav>
				</header>
			</Router>
		);
	}
}

export default Navbar;
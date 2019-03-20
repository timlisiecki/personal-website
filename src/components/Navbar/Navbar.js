import React, { Component } from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Logo from '../Logo/Logo';
import './Navbar.css';

class Navbar extends Component {
	constructor() {
		super();
		this.state = {
			bgColor: 'none'
		}
	}

	listenScrollEvent = e => {
		if (window.scrollY > 150) {
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
			<header className="navbar navbar--clearfix" style={{background: this.state.bgColor}}>
				<div className="navbar__hamburger">
					<DrawerToggleButton click={this.props.drawerClickHandler} />
				</div>
				<nav className="navbar__nav">
					<div className="navbar__ul--left">
						<ul className="navbar__ul">
							<li className="navbar__list-items"><a href="/">About Me</a></li>
							<li className="navbar__list-items"><a href="/">Resume</a></li>
							<li className="navbar__list-items"><a href="/">Portfolio</a></li>
						</ul>
					</div>
					<Logo />
					<div className="navbar__ul--right">
						<ul className="navbar__ul">
							<li className="navbar__list-items"><a href="/">Features</a></li>
							<li className="navbar__list-items"><a href="/">Resources</a></li>
							<li className="navbar__list-items"><a href="/">Contact</a></li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}

export default Navbar;
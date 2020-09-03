// Dependencies
import React, { Component } from 'react';
import { data } from '../api/data';

// Components
import SubpageHero from '../components/Hero/SubpageHero';
import CardList from '../components/Card/CardList';

// Assets
import '../assets/responsive-grid.css';
import './PortfolioPage.css';

class PortfolioPage extends Component {
	render() {
		return (
			<div className="page-content">
				<SubpageHero title="Portfolio" />
				<div className="section-wrapper">
					<div className="grid__container">
						<h1 className="section__title">Featured Projects</h1>
						<div className="grid__row">
							<CardList data={data.projects} linkText="View" isFeatured={true} />
						</div>
					</div>
				</div>
				<div className="section-wrapper section-wrapper--grey">
					<div className="grid__container">
						<h1>Projects</h1>
						<div className="grid__row">
							<CardList data={data.projects} linkText="View" isFeatured={false} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PortfolioPage;

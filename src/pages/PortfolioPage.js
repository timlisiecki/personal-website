// Dependencies
import React, { Component } from 'react';
import { data } from '../data';

// Components
import SubpageHero from '../components/Hero/SubpageHero';
import Button from '../components/Button/Button';
import CardList from '../components/Card/CardList';

// Assets
import '../assets/responsive-grid.css';
import './HomePage.css';

class PortfolioPage extends Component {

	render() {
		return (
			<div className="page-content">
				<SubpageHero title="Portfolio"/>
    			<div className="section-wrapper">
					<div className="grid__container">
                        <h1>Featured Projects</h1>
                        <div className="grid__row">               
                            <CardList data={data.projects} linkText="View" featured={true} />              
                        </div>
                    </div>
    			</div>
    			<div className="section-wrapper section-wrapper--grey">
    				<h1>Projects</h1>
    				<div className="grid__row">               
                        <CardList data={data.projects} linkText="View"/>              
                    </div>
    			</div>
			</div>
		);
	}
}

export default PortfolioPage;
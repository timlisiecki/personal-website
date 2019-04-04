// Dependencies
import React, { Component } from 'react';
import { data } from '../data';

// Components
import SubpageHero from '../components/Hero/SubpageHero';
import HorizontalCardList from '../components/Card/HorizontalCardList';

// Assets
import '../assets/responsive-grid.css';
import './ResourcesPage.css';

class ResourcesPage extends Component {

	render() {

		return (
			<div className="page-content">
				<SubpageHero title="Resources"/>
			    <div className="section-wrapper">
    				<div className="grid__container">
                        <div className="grid__row">
                            <div className="grid__column--one-third">
                                <h1>Overview</h1>
                                <p>
                                    Are you a employer or a recruiter? Are you wondering how I became a self-taught developer and got where I am today? 
                                </p>
                                <p>
                                    Or are you new development and looking for some resources to learn more and add to your own skillset? 
                                </p>
                                <p>
                                    Below are many resources, excluding countless online articles, that helped me go from no web devlopment skills to being able to build my own personal website with React, and how I got to where I am today.
                                </p>
                            </div>
                            <div className="grid__column--two-thirds">
                                <h2>Featured Resources</h2>
                                <HorizontalCardList data={data.resources} isFeatured={true} />
                            </div>
                        </div>
                    </div>
    			</div>
    			<div className="section-wrapper section-wrapper--grey">
    				<div className="grid__container">
                        <h1>Books</h1>
                        <HorizontalCardList data={data.resources} category={"book"} isFeatured={false} />
                    </div>
    			</div>
    			<div className="section-wrapper">
					<div className="grid__container">
                        <h1>Online Courses</h1>
                        <HorizontalCardList data={data.resources} category={"course"} isFeatured={false} />
                    </div>
    			</div>
			</div>
		);
	}
}

export default ResourcesPage;
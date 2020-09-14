// Dependencies
import React, { Component } from 'react';
import { data } from '../api/data';

// Components
import SubpageHero from '../components/Hero/SubpageHero';
import HorizontalCardList from '../components/Card/HorizontalCardList';

// Assets
import '../assets/responsive-grid.css';
import './ResourcesPage.css';

class ResourcesPage extends Component {
	render() {
		return (
			<div className='page-content'>
				<SubpageHero title='Resources' />
				<div className='section-wrapper'>
					<div className='grid__container'>
						<div className='grid__row grid__column--one-half'>
							<div className='m-auto max-width-100'>
								<h1 className='section__title'>Overview</h1>
								<p className='section__content'>
									Are you a employer or a recruiter? Are you wondering how I became a self-taught developer and got where I am
									today?
								</p>
								<p className='section__content'>
									Or are you new development and looking for some resources to learn more and add to your own skillset?
								</p>
								<p className='section__content'>
									Below are many resources, excluding countless online articles, that helped me go from no web development skills to
									being able to build my own personal website with React, and how I got to where I am today.
								</p>
							</div>
							<div className='m-auto max-width-100'>
								<h2 className='section__subtitle'>Featured Resources</h2>
								<HorizontalCardList data={data.resources} isFeatured={true} />
							</div>
						</div>
					</div>
				</div>
				<div className='section-wrapper section-wrapper--grey'>
					<div className='grid__container'>
						<h1 className='section__title'>Books</h1>
						<div className='grid__row grid__column--one-half'>
							<HorizontalCardList data={data.resources} category={'books'} isFeatured={false} />
						</div>
					</div>
				</div>
				<div className='section-wrapper'>
					<div className='grid__container'>
						<h1 className='section__title'>Online Courses</h1>
						<HorizontalCardList data={data.resources} category={'courses'} isFeatured={false} />
					</div>
				</div>
			</div>
		);
	}
}

export default ResourcesPage;

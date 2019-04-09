// Dependencies
import React, { Component } from 'react';
import { Timeline }  from 'vertical-timeline-component-for-react';
import { data } from '../api/data';

// Components
import SubpageHero from '../components/Hero/SubpageHero';
import ResumeList from '../components/Timeline/ResumeList';
import SkillList from '../components/Skills/SkillList';

// Assets
import '../assets/responsive-grid.css';
import './ResumePage.css';

class ResumePage extends Component {



	render() {
		return (
			<div className="page-content">
				<SubpageHero title="Resume"/>
			    <div className="section-wrapper">
    				<div className="grid__container">
                        <div className="grid__row">
                            <h3>Profile</h3>
                            <p>
                                Web developer with over 3 years experience in front end development. Currently working on small development team at a moving software startup. Recently founded Blue Collar Coding, a freelance site focused on WordPress development for small businesses. Formerly a maritime captain with over 10 years experience in a leadership in the passenger vessel industry. Found a passion for coding and decided to shift my career to web development. Constantly looking to improve skillset and learn new things. Seeking a position as a web developer (or similar position), that may also utilize my management and marketing experience.
                            </p>
                        </div>
                    </div>
    			</div>
    			<div className="section-wrapper section-wrapper--grey">
    				<div className="grid__container">
                        <h1>Employment History</h1>
                        <Timeline lineColor={'#418e42'}>
                            <ResumeList data={data.jobs} />
                        </Timeline>
                    </div>
    			</div>
                <div className="section-wrapper">
                    <div className="grid__container">
                        <h1>Skills</h1>
                        <p>Levels: Beginner Intermediate Advanced Expert Guru</p>
                        <div className="grid__row">
                            <h3>Top Skills</h3>
                            <div className="grid__row">
                                <SkillList data={data.skills} isFeatured={true} gridModifier={"--one-third"}/>
                            </div>
                        </div>
                        <div className="grid__row">
                            <h3>Languages, Libraries, and Frameworks</h3>
                            <div className="grid__row">
                                <SkillList data={data.skills} isFeatured={false} list={"languages"}/>
                            </div>
                        </div>
                        <div className="grid__row">
                            <h3>Tools and Technology</h3>
                            <div className="grid__row">
                                <SkillList data={data.skills} isFeatured={false} list={"tools"}/>
                            </div>
                        </div>
                        <div className="grid__row">
                            <h3>Industry Knowledge</h3>
                            <div className="grid__row">
                                <SkillList data={data.skills} isFeatured={false} list={"industry"}/>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		);
	}
}

export default ResumePage;
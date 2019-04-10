// Dependencies
import React from 'react';
import { TimelineItem }  from 'vertical-timeline-component-for-react';

// Components

// Styles
import './ResumeItem.css';

const ResumeItem = ({ title, company, desc, dates, industry }) => {
	return (
		<TimelineItem
            dateText={dates}
            dateInnerStyle={
              industry === 'maritime' ? { background: '#3e98c7', color: '#ffffff' } 
              : { background: '#418e42', color: '#ffffff' }
            }
            bodyContainerStyle={{
              background: '#ddd',
              padding: '1rem',
              borderRadius: '5px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
        >
            <p className="resume-item__title"> <strong>{title}</strong></p>
            <p className="resume-item__subtitle"><em>{company}</em></p>
            <p className="resume-item__desc">{desc}</p>
        </TimelineItem>
	);
}

export default ResumeItem;
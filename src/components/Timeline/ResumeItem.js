// Dependencies
import React from 'react';
import { TimelineItem }  from 'vertical-timeline-component-for-react';

// Components

// Styles

const ResumeItem = ({ title, company, desc, dates }) => {
	return (
		<TimelineItem
            dateText={dates}
            dateInnerStyle={{ background: '#418e42', color: '#ffffff' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '1rem',
              borderRadius: '5px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
        >
            <h3> {title}, {company}</h3>
            <p>{desc}</p>
        </TimelineItem>
	);
}

export default ResumeItem;
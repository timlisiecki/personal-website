// Dependencies
import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Components

// Styles
import './SkillBar.css';

const SkillBar = ({ name, level }) => {

	return (
		<div className="grid__column--one-sixth">
			<div className="skillbar">
				<CircularProgressbar
				  percentage={
				  	(() => {
				  		switch(level) {
					  		case "guru":
					  			return 100;
					  		case "expert":
					  			return 80;
					  		case "advanced":
					  			return 60;
					  		case "intermediate":
					  			return 40;
					  		case "beginner":
					  			return 20;
					  		default:
					  			return 0;
					  	}
				  })()}
				  text={level}
				  initialAnimation={true}
				  styles={{
				  	path: {
				  		transition: "stroke-dashoffset 2s ease 1.5s",
				  	}
				  }}
				/>
				<p className="skillbar__title">{name}</p>
			</div>
		</div>
	);

}

export default SkillBar;
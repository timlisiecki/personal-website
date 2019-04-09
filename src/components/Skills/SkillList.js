// Dependencies
import React from 'react';

// Components
import SkillBar from './SkillBar';

// Styles

const SkillList = ( { data, isFeatured, list } ) => {

	const topSkills = data.filter( skill => skill.featured ).map((skill, i) => {
			return (
				<SkillBar 
					key={i}
					name={skill.name}
					level={skill.level}
				/>
			);
		});

	const languagesList = data.filter( skill => !skill.featured && skill.type === "language-library" ).map((skill, i) => {
			return (
				<SkillBar 
					key={i}
					name={skill.name}
					level={skill.level}
				/>
			);
		});

	const toolsList = data.filter( skill => skill.type === "tools-technology").map((skill, i) => {
			return (
				<SkillBar 
					key={i}
					name={skill.name}
					level={skill.level}
				/>
			);
		});

	const industryList = data.filter( skill => skill.type === "industry-knowledge" ).map((skill, i) => {
			return (
				<SkillBar 
					key={i}
					name={skill.name}
					level={skill.level}
				/>
			);
		});

	let listType;
	if (isFeatured) {
		listType = topSkills;
	} else if (list === "languages" ) {
		listType = languagesList;
	} else if (list === "tools") {
		listType = toolsList;
	} else if (list === "industry") {
		listType = industryList;
	} else {
		return <p>Something went wrong...</p>
	}

	return <div className="skill-list">{listType}</div>;
}

export default SkillList;
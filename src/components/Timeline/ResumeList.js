// Dependencies
import React from 'react';

// Components
import ResumeItem from './ResumeItem';


const ResumeList = ( { data } ) => {
	return (
		    <div>
		    	{
		    		data.map((resume, i) => {
		    			return (
	    					<ResumeItem
	    						key={i}
	    						title={data[i].title}
	    						company={data[i].company}
	    						desc={data[i].desc}
	    						dates={data[i].dates}
	    						industry={data[i].industry}
	    					/>
		    			);
		    		})
		    	}
		    </div>
	);
}

export default ResumeList;
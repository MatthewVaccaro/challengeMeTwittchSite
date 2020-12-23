import React from 'react';

const Upvote = ({ id }) => {
	return (
		<div
			onClick={(e) => {}}
			style={{ width: '50px', height: '50px' }}
			className={`flex justify-center items-center rounded-md transition-all duration-300 bg-blue`}
		>
			<h3 className="h3-light">+1</h3>
		</div>
	);
};

export default Upvote;

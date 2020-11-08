import React from 'react';

const Tag = ({ text, color }) => {
	return (
		<div className={`bg-${color} inline-block px-px7 py-px2 rounded`}>
			<p className="text-sm text-white"> {text} </p>
		</div>
	);
};

export default Tag;

import React from 'react';
import colors from '../utils/colorTypes';

const Tag = ({ text }) => {
	let currentColor = '';

	colors.map((cv) => {
		const type = cv[0].toLowerCase();
		const compareText = text.toLowerCase();
		if (compareText === type) {
			currentColor = cv[1];
		}
	});

	return (
		<div className={`bg-${currentColor} inline-block px-px7 py-px2 rounded`}>
			<p className="text-sm text-white font-semibold"> {text} </p>
		</div>
	);
};

export default Tag;

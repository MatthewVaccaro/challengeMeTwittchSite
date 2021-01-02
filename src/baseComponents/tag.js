import React from 'react';
import { findColor } from '../utils/colorTypes';

const Tag = ({ text }) => {
	return (
		<div className={`bg-${findColor(text)[1]} inline-block px-px7 py-px2 rounded`}>
			<p className="text-sm text-white font-semibold capitalize"> {text} </p>
		</div>
	);
};

export default Tag;

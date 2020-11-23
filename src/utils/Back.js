import React from 'react';
import backIcon from '../assets/icons/backIcon.svg';
import history from './history';

const Back = () => {
	return (
		<div
			className="flex items-center mt-4"
			onClick={() => {
				history.goBack();
			}}
		>
			<img src={backIcon} alt="Back Button" />
			<p className="p-mid"> Back </p>
		</div>
	);
};

export default Back;

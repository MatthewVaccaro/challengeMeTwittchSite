import React from 'react';
import '../css/components.css';
import '../css/base.css';
import '../css/tackOn.css';

const Pill = ({ text }) => {
	var color = 'greenBG';
	if (text === 'Troll') {
		color = 'redBG';
	}
	else if (text === 'Tough') {
		color = 'yellowBG';
	}
	else {
		color = 'greenBG';
	}
	return (
		<div className={`pill ${color}`}>
			<p className={` ${color === 'yellowBG' ? 'black' : ''} white lineHeight22rem`}>{text}</p>
		</div>
	);
};

export default Pill;

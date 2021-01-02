import React from 'react';
//Deps
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//icons
import challengeIcon from '../assets/icons/challengeIcon.svg';
const Button = ({ size, text, bg, textColor, icon, location }) => {
	const icons = [ [ 'challenge', challengeIcon ] ];
	var selectedIcon = '';
	icons.map((obj) => {
		if (icon === obj[0]) {
			selectedIcon = obj[1];
		}
	});
	const buttonSize = size === 'full' ? 'flex justify-center' : 'flex';
	return (
		<div className={size ? '' : 'inline-block'}>
			<Link to={`${location}`}>
				<div
					className={`bg-${bg} hover:bg-${bg}_100 transition-all duration-300 rounded-md px-6 py-3 ${buttonSize}`}
				>
					{icon ? <img className="mr-3" src={selectedIcon} alt="Icon" /> : ''}
					<p className="text-base text-white font-medium text-center"> {text}</p>
				</div>
			</Link>
		</div>
	);
};

export default Button;

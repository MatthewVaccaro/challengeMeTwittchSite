import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../css/components.css';
import '../css/base.css';
import '../css/tackOn.css';

const Button = ({ color, text, icon, link, exLink }) => {
	console.log(link, exLink);
	if (exLink === true) {
		return (
			<div>
				<a href={`${link}`} target="_blank">
					<div className={` ${color} ${color === 'gradient' ? 'glow' : 'boxShadow'} buttonContainer`}>
						<div className={`buttonContents  `}>
							<img className="marginRight10" src={icon} />
							<h4 className="white"> {text} </h4>
						</div>
					</div>
				</a>
			</div>
		);
	}
	else {
		return (
			<div>
				<Link to={link}>
					<div className={` ${color} ${color === 'gradient' ? 'glow' : 'boxShadow'} buttonContainer`}>
						<div className={`buttonContents  `}>
							<img className="marginRight10" src={icon} />
							<h4 className="white"> {text} </h4>
						</div>
					</div>
				</Link>
			</div>
		);
	}
};

export default Button;

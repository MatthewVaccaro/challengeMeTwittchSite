import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import whiteBackIcon from '../assets/icons/whiteBackIcon.svg';
const GameHeader = ({ gif, gameName }) => {
	// ! Once the backend is written we will come back to this component
	return (
		<div>
			<div className="backButton">
				<Link to="/selectGame">
					<div className="flex alignItemsCenter">
						<img src={whiteBackIcon} />
						<h4 className="white"> Back </h4>
					</div>
				</Link>
			</div>
			<div src="" className={`gifHeader`} />
			<h2 className="gameTitle marginBottom15"> {gameName}</h2>
		</div>
	);
};

export default GameHeader;

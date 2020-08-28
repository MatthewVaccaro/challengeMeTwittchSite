import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import '../css/components.css';
import '../css/base.css';
import '../css/tackOn.css';

const Game = ({ game, gameImage }) => {
	const link = game.split(' ').join('-');
	console.log(link);
	return (
		<div>
			<Link to={`/challenges/${link}`}>
				<div className=" flex alignItemsCenter">
					<img className="gameImage marginRight15 " src={gameImage} />
					<div className="contents width100">
						<h3> {game} </h3>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Game;

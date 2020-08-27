import React from 'react';
import '../css/selectGame.css';
//Deps
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// Assets
import gameIcon from '../assets/icons/gameIcon.svg';
import backIcon from '../assets/icons/backIcon.svg';
import Game from '../components/game';
import fallGuys from '../assets/games/FallGuys.png';
import cod from '../assets/games/cod.png';
import fifa20 from '../assets/games/fifa20.png';
const selectGameView = () => {
	// ! Fake Object
	const data = [
		{
			game: 'Call Of Duty',
			gameImage: cod
		},
		{
			game: 'Fall Guys',
			gameImage: fallGuys
		},
		{
			game: 'FIFA 20',
			gameImage: fifa20
		}
	];
	return (
		<div className="viewPadding">
			<Link to="/">
				<div className="flex alignItemsCenter marginTop20">
					<img src={backIcon} />
					<h4 className=""> Back </h4>
				</div>
			</Link>
			<div className="flex marginTop30 marginBottom30">
				<img className="gameIcon marginRight10" src={gameIcon} />
				<h2 className="black"> Select Game</h2>
			</div>
			{data.map((cv) => {
				return (
					<div className="card">
						<Game game={cv.game} gameImage={cv.gameImage} />
					</div>
				);
			})}
		</div>
	);
};

export default selectGameView;

import React from 'react';
import '../css/selectGame.css';
//Deps
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//Components
import Card from '../utils/Card';
import Back from '../utils/Back';

// Assets
import backIcon from '../assets/icons/backIcon.svg';
import fallGuys from '../assets/games/FallGuys.png';
import cod from '../assets/games/cod.png';
import fifa20 from '../assets/games/fifa20.png';
const selectGameView = () => {
	// ! Fake Object
	const data = [
		{
			game: 'Call Of Duty',
			gameImage: cod,
			status: true,
			sub: ''
		},
		{
			game: 'Fall Guys',
			gameImage: fallGuys,
			status: true,
			sub: ''
		},
		{
			game: 'FIFA 20',
			gameImage: fifa20,
			status: true,
			sub: ''
		},
		{
			game: 'FIFA 20',
			gameImage: fifa20,
			status: false,
			sub: 'Not Taking Requests'
		}
	];
	return (
		<div className="container">
			<Back />

			<h1 className="h1-dark"> Select Game</h1>
			{data.map((cv) => {
				return (
					<div className={cv.status ? '' : 'opacity-50'}>
						<Card
							leftElement={
								<img src={cv.gameImage} className="object-cover h-20 w-20 mr-3" alt={cv.game} />
							}
							header={cv.game}
							sub={cv.sub}
							location={cv.status ? `/challenges/${cv.game}` : ''}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default selectGameView;

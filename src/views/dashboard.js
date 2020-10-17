import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Toggle from '../components/toggle';
const Dashboard = () => {
	const [ games, setGames ] = useState([]);

	useEffect(() => {
		axios
			.get('https://challengerbackend.herokuapp.com/api/games')
			.then((res) => {
				console.log(res.data);
				setGames(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className="baseContainer">
			<div className="flex justifyContentSpaceBetween alignItemsCenter marginTop50 marginBottom25 ">
				<h2 className="secondBlack">Games List</h2>
				<Link to="/addgame" className="blue">
					Add Game
				</Link>
			</div>
			{games.length > 0 ? (
				games.map((cv) => {
					return (
						<div className="card">
							<Toggle />
							<Link to="/">
								<img src="" />
								<h3 className="black"> {cv.gameTitle} </h3>
								{/* Maybe Forward arrow */}
							</Link>
						</div>
					);
				})
			) : (
				<h3
					onClick={() => {
						console.log(games.length);
					}}
				>
					No Games Here!
				</h3>
			)}
		</div>
	);
};

export default Dashboard;

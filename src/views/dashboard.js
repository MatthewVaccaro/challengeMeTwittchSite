import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backIcon from '../assets/icons/backIcon.svg';
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
				<Link to="/addgame" className="blue h3">
					Add Game
				</Link>
			</div>
			{games.length > 0 ? (
				games.map((cv) => {
					return (
						<div className="card flex alignItemsCenter">
							<Toggle />
							<Link
								to={`/${cv.gameTitle}/${cv.id}`}
								className="flex alignItemsCenter justifyContentSpaceBetween width100"
							>
								<div className="flex alignItemsCenter">
									<img className="imgPreview marginRight20 marginLeft20" src={cv.gameArtwork} />
									<h3 className="black"> {cv.gameTitle} </h3>
								</div>
								<img className="rotate180" src={backIcon} />
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

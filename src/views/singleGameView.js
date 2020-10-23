import React from 'react';
import backIcon from '../assets/icons/backIcon.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const singleGameView = (props) => {
	const id = props.match.params.id;
	const game = props.match.params.game;

	return (
		<div className="baseContainer">
			<div className="flex justifyContentSpaceBetween alignItemsCenter">
				<div className=" flex">
					<img className="backCircle marginRight10" src={backIcon} />
					<h2 className="secondBlack"> {game} </h2>
				</div>
				<div>
					<Link to="/addgame" className="blue">
						Edit
					</Link>
					<button className="delete red"> Delete </button>
				</div>
			</div>
			<div className="card">
				<h3> Add Challenge</h3>
				<label className="label marginTop25"> Type </label>
				<select className=" marginTop10" name="Type" placeholder="Title" type="text">
					<option disabled selected value>
						select an option
					</option>
					<option value="meme">Meme</option>
					<option value="difficult">Difficult</option>
					<option value="troll">Troll</option>
				</select>
				<label className="label marginTop25"> Brief </label>
				<input className=" marginTop10" name="Brief" placeholder="Title" type="text" />
			</div>
		</div>
	);
};

export default singleGameView;

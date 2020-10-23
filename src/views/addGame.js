import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import AddPhoto from '../components/addPhoto';

const AddGame = (props) => {
	const [ gameData, setGameData ] = useState({
		gameTitle: '',
		gameArtwork: '',
		gameGif: ''
	});

	const history = useHistory();

	function addGame(e) {
		e.preventDefault();
		if (!gameData.gameTitle) {
			console.log('needs title');
		}
		axios
			.post('https://challengerbackend.herokuapp.com/api/games', gameData)
			.then((res) => {
				history.push('/dashboard');
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function changeHandler(e) {
		e.preventDefault();
		setGameData({ ...gameData, [e.target.name]: e.target.value });
	}
	return (
		<div className="baseContainer">
			<div className="flex justifyContentSpaceBetween alignItemsCenter marginTop50 marginBottom25 ">
				<h2
					onClick={() => {
						console.log('--->', gameData);
					}}
					className="secondBlack"
				>
					Add New Game
				</h2>/
			</div>
			<form onSubmit={addGame}>
				<div className="card">
					<label className="label"> Game Title </label>
					<input
						className="max-width1040 marginTop10"
						name="gameTitle"
						placeholder="Title"
						type="text"
						onChange={changeHandler}
						value={gameData.gameTitle}
					/>
					<div className="flex">
						<AddPhoto
							gameData={gameData}
							setGameData={setGameData}
							id={1}
							name={'gameArtwork'}
							buttonText={'Game Artwork'}
						/>
						<AddPhoto
							gameData={gameData}
							setGameData={setGameData}
							id={2}
							name={'gameGif'}
							buttonText={'Game Gif'}
						/>
					</div>
				</div>
				<button className="greenBG white marginRight25" type="submit">
					Add game
				</button>
				<button className="thridBlackBG black" type="submit">
					Cancel
				</button>
			</form>
		</div>
	);
};

export default AddGame;

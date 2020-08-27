import React from 'react';
import '../css/challengeView.css';
import fallGuys from '../assets/games/gifs/fallGuys.gif';
import GameHeader from '../components/gameHeader';
const ChallengeView = () => {
	// ! Every gif/image used in the header will have to be it's on CSS class appended to the className base upon selected game (perhaps using the params to ID the sellected game)
	return (
		<div>
			<GameHeader gameName={'FALL GUYS'} gif={'gifFallGuys'} />
		</div>
	);
};

export default ChallengeView;

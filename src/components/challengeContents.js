import React from 'react';

import '../css/components.css';
import '../css/base.css';
import '../css/tackOn.css';

import gameIcon from '../assets/icons/gameIcon.svg';

import Pill from '../components/pill';

const ChalllengeContents = ({ game, gameImage, challenge, type, user, color }) => {
	return (
		<div className=" flex alignItemsCenter">
			<img className="gameImage marginRight15 " src={gameImage} />
			<div className="contents width100">
				<div className="flex justifyContentSpaceBetween marginBottom5 ">
					<div className="flex ">
						<img className="marginRight5" src={gameIcon} />
						<p className="blue">{game}</p>
					</div>
					<Pill text={type} />
				</div>
				<h3 className={`${color}`}> {challenge} </h3>
				<p className={`${color} opacity75 lineHeightReset`}> {user}</p>
			</div>
		</div>
	);
};

export default ChalllengeContents;

import React from 'react';
import Tag from './tag';
import cod from '../assets/games/cod.png';
import darkChallengeIcon from '../assets/icons/darkChallengeIcon.svg';

const Challenge = ({ text, game, user, tag }) => {
	return (
		<div className="flex-col bg-white shadow-lg rounded my-3">
			<div className="flex items-center">
				<img src={game} className=" object-cover h-16 w-16 m-3" alt="Game Artwork" />
				<p className="h3-dark mr-3">{text}</p>
			</div>
			<div className="bg-black h-px2 w-full opacity-10" />
			<div className="flex items-center justify-between">
				<div className="flex items-center ">
					<img src={darkChallengeIcon} className="ml-3 mr-2" alt="challenge icon" />
					<p className="p-mid font-semibold">{user}</p>
				</div>
				<div className="mx-2 my-2 mr-3">
					<Tag text={tag} color={'green'} />
				</div>
			</div>
		</div>
	);
};

export default Challenge;

import React from 'react';
import Tag from './tag';
import challengeIcon from '../assets/icons/challengeIcon.svg';
import cod from '../assets/games/cod.png';

const CurrentChallenge = ({ image, text, user, tag }) => {
	return (
		<div className="bg-black py-3 px-4 rounded-lg w-full bg-cover bg-center">
			<div className="flex items-center mb-4">
				<img className="w-16 h-16 mr-4 border-2 border-white rounded-md" src={image} />
				<div className="flex flex-col">
					<p className="text-green text-sm "> Current Challenge</p>
					<p className="h3-light">{'This is some challenge stuff'}</p>
				</div>
			</div>
			<div className="bg-white h-px2 opacity-10 mt-2" />
			<div className="flex items-center justify-between">
				<div className="flex items-center ">
					<img src={challengeIcon} className="ml-3 mr-2" alt="challenge icon" />
					<p className="p-light font-semibold">{'poop Doop'}</p>
				</div>
				<div className="my-2">
					<Tag text={'meme'} />
				</div>
			</div>
		</div>
	);
};

export default CurrentChallenge;

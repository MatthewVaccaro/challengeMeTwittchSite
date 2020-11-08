import React from 'react';
import Tag from './tag';
import cod from '../assets/games/cod.png';
import challengeIcon from '../assets/icons/challengeIcon.svg';

const ChallengeContent = () => {
	return (
		<div className="flex-col bg-white shadow-xl rounded ">
			<div className="flex items-center">
				<img src={cod} className=" object-cover h-16 w-16 m-3" alt="Game Artwork" />
				<p className="text-base text-black font-semibold mr-3">
					Play Domination With Inverted JoyStick Controls.
				</p>
			</div>
			<div className="bg-black h-px2 w-full opacity-10" />
			<div className="flex items-center justify-between">
				<div className="flex items-center ">
					<img src={challengeIcon} className="ml-3 mr-2" alt="challenge icon" />
					<p className="">BootyScooter</p>
				</div>
				<div className="mx-2 my-2 mr-3">
					<Tag text={'meme'} color={'green'} />
				</div>
			</div>
		</div>
	);
};

export default ChallengeContent;

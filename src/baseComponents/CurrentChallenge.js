import React from 'react';
import Tag from './tag';
import challengeIcon from '../assets/icons/challengeIcon.svg';
import cod from '../assets/games/cod.png';

const CurrentChallenge = ({ image, text, user, tag }) => {
	return (
		<div
			style={{
				marginLeft: 'calc(50% - 50vw)'
			}}
			className="bg-black py-3 px-4 rounded-t-lg sticky bottom-0 w-screen bg-cover bg-center"
		>
			<p className="text-green text-sm mb-3"> Current Challenge</p>
			<div className="flex items-center">
				<img className="w-16 h-16 mr-4 mb-2 border-2 border-white rounded-md" src={image} />
				<p className="h3-light">{text}</p>
			</div>
			<div
				style={{ width: '375px', marginLeft: 'calc(50% - 50vw)' }}
				className="bg-white h-px2 opacity-10 mt-2"
			/>
			<div className="flex items-center justify-between">
				<div className="flex items-center ">
					<img src={challengeIcon} className="ml-3 mr-2" alt="challenge icon" />
					<p className="p-light font-semibold">{user}</p>
				</div>
				<div className="my-2">
					<Tag text={tag} />
				</div>
			</div>
		</div>
	);
};

export default CurrentChallenge;

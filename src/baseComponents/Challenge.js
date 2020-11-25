import React from 'react';
import Tag from './tag';
import cod from '../assets/games/cod.png';
import darkChallengeIcon from '../assets/icons/darkChallengeIcon.svg';
import challengeIcon from '../assets/icons/challengeIcon.svg';

const Challenge = ({ text, game, user, tag, current }) => {
	return (
		<div className={`flex-col shadow-lg rounded ${current ? 'bg-black ' : 'bg-white '} `}>
			<div className="flex items-center">
				<img src={game} className=" object-cover h-16 w-16 m-3" alt="Game Artwork" />
				<div className="flex flex-col">
					{current ? <p className="text-green text-sm "> Current Challenge</p> : ''}
					<p className={` mr-3 ${current ? 'h3-light ' : 'h3-dark '} `}>{text}</p>
				</div>
			</div>
			<div className={` h-px2 w-full opacity-10 ${current ? 'bg-white' : 'bg-black'} `} />
			<div className="flex items-center justify-between">
				<div className="flex items-center ">
					<img src={current ? challengeIcon : darkChallengeIcon} className="ml-3 mr-2" alt="challenge icon" />
					<p className={`font-semibold ${current ? 'p-light' : 'p-mid'} `}>{user}</p>
				</div>
				<div className="mx-2 my-2 mr-3">
					<Tag text={tag} color={'green'} />
				</div>
			</div>
		</div>
	);
};

export default Challenge;

{
	/* <div className="bg-black py-3 px-4 rounded-lg w-full bg-cover bg-center">
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
		</div> */
}

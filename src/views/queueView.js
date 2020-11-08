import React from 'react';
import '../css/queueView.css';
// Componentsd
import ChallengeContents from '../components/challengeContents';
import Button from '../utils/Button';
import Tag from '../baseComponents/tag';
import ChallengeContent from '../baseComponents/challengeContent';
// Assets
import fallGuys from '../assets/games/FallGuys.png';
import cod from '../assets/games/cod.png';
import fifa20 from '../assets/games/fifa20.png';
import facebookIcon from '../assets/icons/facebookIcon.svg';
import challengeIcon from '../assets/icons/challengeIcon.svg';

const QueueView = () => {
	// ! Fake Object
	const data = [
		{
			game: 'Call Of Duty',
			gameImage: cod,
			challenge: 'Do this one thing so I can laugh',
			type: 'Tough',
			user: 'Big Big Juice',
			color: 'black'
		},
		{
			game: 'FIFA 20',
			gameImage: fifa20,
			challenge: 'so I can laugh',
			type: 'Meme',
			user: 'Big Juice',
			color: 'black'
		},
		{
			game: 'Fall Guys',
			gameImage: fallGuys,
			challenge: 'Do this one thing so I can laugh',
			type: 'Troll',
			user: 'Big Juice',
			color: 'black'
		},
		{
			game: 'Call Of Duty',
			gameImage: cod,
			challenge: 'Do this one thing so I can laugh',
			type: 'Meme',
			user: 'Big Juice',
			color: 'black'
		},
		{
			game: 'Call Of Duty',
			gameImage: cod,
			challenge: 'Do this one thing so I can laugh',
			type: 'Tough',
			user: 'Big Juice',
			color: 'black'
		},
		{
			game: 'Call Of Duty',
			gameImage: cod,
			challenge: 'Do this one thing so I can laugh',
			type: 'Meme',
			user: 'Big Juice',
			color: 'black'
		}
	];

	return (
		<div className="container">
			{/* <div>
				<img src="" alt="profile Photo" />
				<div className="">
					<a> Watch Stream</a>
					<img src="" alt="External Link Icon" />
				</div>
			</div> */}

			{/* <Button size={'full'} text={'Fuck Yourself'} bg={'green'} textColor={'white'} icon={''} /> */}
			<ChallengeContent />
		</div>
	);
};

export default QueueView;

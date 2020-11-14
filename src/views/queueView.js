import React from 'react';
import '../css/queueView.css';
// Componentsd
import Button from '../utils/Button';
import Challenge from '../baseComponents/Challenge';
import CurrentChallenge from '../baseComponents/CurrentChallenge';
// Assets
import profilePhoto from '../assets/profilePhoto.png';
import externalLinkIcon from '../assets/icons/externalLinkIcon.svg';
import fallGuys from '../assets/games/FallGuys.png';
import cod from '../assets/games/cod.png';
import fifa20 from '../assets/games/fifa20.png';

const QueueView = () => {
	// ! Fake Object
	const data = [
		{
			game: 'Call Of Duty',
			gameImage: cod,
			challenge: 'This is current challege, please play COD!',
			type: 'Troll',
			user: 'TestBoi',
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
			gameImage: fifa20,
			challenge: 'Do this one thing so I can laugh',
			type: 'Difficult',
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
			<div className="flex items-center my-4">
				<img
					style={{ width: '80px', height: '80px' }}
					className="mr-2"
					src={profilePhoto}
					alt="profile Photo"
				/>
				<div>
					<h1 class="h1-dark"> Shupp610 </h1>
					<div className="flex">
						<a className="font-semibold text-blue mr-1"> Watch Stream</a>
						<img src={externalLinkIcon} alt="External Link Icon" />
					</div>
				</div>
			</div>

			<Button size={'full'} text={'Send Challenge'} bg={'blue'} textColor={'white'} icon={'challenge'} />
			<div className=" mt-5 ">
				{data ? (
					data.map((object) => {
						return (
							<Challenge
								text={object.challenge}
								game={object.gameImage}
								tag={object.type}
								user={object.user}
							/>
						);
					})
				) : (
					<div>
						<h1 className="text-4xl font-semibold text-black font-sans leading-relaxed opacity-70">
							No Challenges
						</h1>
						<p className="h3-dark opacity-70">Be the first to add a challenge to the queue!</p>
					</div>
				)}
			</div>
			{data ? (
				<CurrentChallenge
					image={data[0].gameImage}
					text={data[0].challenge}
					user={data[0].user}
					tag={data[0].type}
				/>
			) : (
				''
			)}
		</div>
	);
};

export default QueueView;

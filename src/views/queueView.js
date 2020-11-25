import React from 'react';
// Component
import Button from '../utils/Button';
import Challenge from '../baseComponents/Challenge';
import CurrentChallenge from '../baseComponents/CurrentChallenge';
import getViewportWidth from '../utils/getViewportWidth';
// Assets
import profilePhoto from '../assets/profilePhoto.png';
import externalLinkIcon from '../assets/icons/externalLinkIcon.svg';
import fallGuys from '../assets/games/FallGuys.png';
import cod from '../assets/games/cod.png';
import fifa20 from '../assets/games/fifa20.png';

const QueueView = () => {
	const width = getViewportWidth();

	// ! Fake Object
	const listData = [
		{
			game: 'Call Of Duty',
			gameImage: cod,
			challenge: 'Sing Adele’s “Hello” everytime you get into a gun fight!',
			type: 'Troll',
			user: 'Paul',
			color: 'black',
			current: false
		},
		{
			game: 'FIFA 20',
			gameImage: fifa20,
			challenge: 'so I can laugh',
			type: 'Meme',
			user: 'Big Juice',
			color: 'black',
			current: false
		}
	];

	const currentGame = [
		{
			game: 'Call Of Duty',
			gameImage: cod,
			challenge: 'Sing Adele’s “Hello” everytime you get into a gun fight!',
			type: 'Troll',
			user: 'Paul',
			color: 'black',
			current: true
		}
	];

	return (
		<div className="container px-3 mx-auto max-w-3/4 mt-4">
			<div className="sm:flex sm:justify-between sm:mb-6 sm:items-end ">
				<div className="sm:w-1/2 sm:mr-6">
					<div className="flex items-center mb-4">
						<img
							style={{ width: '80px', height: '80px' }}
							className="mr-2"
							src={profilePhoto}
							alt="profile Photo"
						/>
						<div>
							<h1 class="h1-dark mb-2"> Shupp610 </h1>
							<div className="flex">
								<a
									href="https://www.facebook.com/gaming/shupp610/"
									className="font-semibold text-blue mr-1"
								>
									Watch Stream
								</a>
								<img src={externalLinkIcon} alt="External Link Icon" />
							</div>
						</div>
					</div>

					<Button
						size={'full'}
						text={'Send Challenge'}
						bg={'blue'}
						textColor={'white'}
						icon={'challenge'}
						location={'/selectGame'}
					/>
				</div>
				<div className="mt-4">
					<Challenge
						text={currentGame[0].challenge}
						game={currentGame[0].gameImage}
						tag={currentGame[0].type}
						user={currentGame[0].user}
						current={currentGame[0].current}
					/>
				</div>
			</div>
			{listData ? (
				listData.map((object) => {
					return (
						<div className="my-4">
							<Challenge
								text={object.challenge}
								game={object.gameImage}
								tag={object.type}
								user={object.user}
								current={object.current}
							/>
						</div>
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
	);
};

export default QueueView;

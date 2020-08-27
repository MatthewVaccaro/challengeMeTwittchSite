import React from 'react';
import '../css/queueView.css';
// Componentsd
import ChallengeContents from '../components/challengeContents';
import Button from '../components/button';
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

	data.map((cv) => {
		console.log(cv);
	});

	return (
		<div>
			<div className=" currentQueue viewPadding">
				<ChallengeContents
					game={'Fall Guys'}
					gameImage={fallGuys}
					challenge={'Take a shot everytime you fall!'}
					type={'Troll'}
					user={'SuperDuperNope420'}
					color={'white'}
				/>
				<div className="flex justifyContentSpaceBetween marginTop35">
					<Button
						link={'/selectGame'}
						exLink={false}
						color={'gradient'}
						icon={challengeIcon}
						text={'Create Challenge'}
					/>
					<Button
						link={'https://www.facebook.com/gaming/shupp610/'}
						exLink={true}
						color={'blueBG'}
						icon={facebookIcon}
						text={'Watch Now'}
					/>
				</div>
			</div>
			<div className=" viewPadding">
				<p className="opacity75 marginTop15 marginBottom5"> Next Approved Challenges</p>
				{data.map((cv) => {
					return (
						<div className="card">
							<ChallengeContents
								game={cv.game}
								gameImage={cv.gameImage}
								challenge={cv.challenge}
								type={cv.type}
								user={cv.user}
								color={'black'}
								key={Math.random()}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default QueueView;

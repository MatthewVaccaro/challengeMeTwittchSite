import React, { useState, useEffect, useContext } from 'react';
import { StreamContext } from '../global/streamContext';
import Button from '../utils/Button';
import externalLinkIcon from '../assets/icons/externalLinkIcon.svg';
import { GET_singleGame } from '../axios/publicRequests';

const Header = () => {
	const [ stream, setStream ] = useContext(StreamContext);
	const [ game, setGame ] = useState();

	useEffect(
		() => {
			const foundGame = stream
				? GET_singleGame(stream.game_id_fk)
						.then((res) => {
							console.log(res.data);
							setGame(res.data[0]);
						})
						.catch((err) => console.log(err))
				: '';
		},
		[ stream ]
	);

	console.log('game', game);
	console.log('stream', stream);
	const initialHeight = window.innerWidth > 600 ? '282px' : '203px';
	const [ height, setHeight ] = useState(initialHeight);

	function reportWindowSize() {
		if (window.innerWidth > 600 && height === '203px') {
			setHeight('282px');
		}
		if (window.innerWidth < 600 && height === '282px') {
			setHeight('203px');
		}
	}

	window.onresize = reportWindowSize;
	return (
		<div>
			<img
				src={stream && game ? stream.live ? game.artwork : stream.avatar : ''}
				className=" w-full bg-no-repeat absolute top-0 left-0 z-0 sm:max-w-5xl object-cover sm:rounded-b-3xl sm:m-auto sm:right-0"
				style={{ height: height }}
			/>
			<div
				style={{ height: height }}
				className=" bg-black opacity-80 w-full bg-no-repeat absolute top-0 left-0 z-0 sm:max-w-5xl sm:rounded-b-3xl sm:m-auto sm:right-0"
			/>
			<div className="flex flex-col relative z-10 h-40 justify-center sm: mt-4">
				<div className="flex items-center sm:justify-center">
					<div className={`w-3 h-3 rounded-lg ${stream ? (stream.live ? 'bg-green' : 'bg-red') : ''} mr-2`} />
					<p className="p-light">{stream ? stream.live ? 'Playing' : 'Offline' : ''}</p>
				</div>
				<h2 className="h2-light mt-1 mb-4 sm:text-center">
					{stream && game ? stream.live ? game.title : stream.username : ''}
				</h2>
				<div className="flex items-center sm:justify-center">
					<img className="mr-3" src={stream ? stream.avatar : ''} alt="Streamer Avatar" />
					<p className="mr-3 p-light"> Watch Stream</p>
					<img src={externalLinkIcon} alt="External link icon" />
				</div>
			</div>
			<div className="relative z-10 right-0 left-0 m-auto max-w-sm">
				{stream ? stream.live ? (
					<Button
						text={'Send Challenge'}
						bg={stream ? `#${stream.mainColor}` : 'blue'}
						textColor={stream ? `#${stream.mainTextColor}` : 'blue'}
						icon={'challenge'}
						size={'full'}
						location={stream ? `${stream.username}/challenges/${stream.game_id_fk}` : ''}
					/>
				) : (
					<Button
						text={'Send Challenge'}
						bg={stream ? `#${stream.mainColor}` : 'blue'}
						textColor={stream ? `#${stream.mainTextColor}` : 'blue'}
						icon={'challenge'}
						size={'full'}
						location={'disabled'}
					/>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default Header;

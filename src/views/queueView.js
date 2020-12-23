import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { EntriesContext } from '../global/entriesContext';
import { StreamContext } from '../global/streamContext';
// Component
import Button from '../utils/Button';
import Challenge from '../baseComponents/Challenge';
import Header from '../baseComponents/header';

// Assets
import profilePhoto from '../assets/profilePhoto.png';
import externalLinkIcon from '../assets/icons/externalLinkIcon.svg';

const QueueView = () => {
	const [ entries, setEntries ] = useContext(EntriesContext);
	const [ stream, setStream ] = useContext(StreamContext);

	const listData = [
		{
			id: 1,
			challenge: 'Sing Adele’s “Hello” everytime you get into a gun fight!',
			type: 'Troll',
			user: 'Paul'
		},
		{
			id: 2,
			challenge: 'so I can laugh',
			type: 'Meme',
			user: 'Big Juice'
		}
	];

	return (
		<div className="container px-3 mx-auto max-w-3/4 mt-4 sm:max-w-5xl sm:mt-0 sm:flex sm:flex-col sm:justify-center">
			<Header />
			<div className="flex flex-col relative z-10 h-40 justify-center sm: mt-4">
				<div className="flex items-center sm:justify-center">
					<div className=" w-3 h-3 rounded-lg bg-green mr-2 " />
					<p className="p-light"> Playing</p>
				</div>
				<h2 className="h2-light mt-1 mb-4 sm:text-center"> Call of Duty: Warzone</h2>
				<div className="flex items-center sm:justify-center">
					<img className="mr-3" src={profilePhoto} alt="Streamer Avatar" />
					<p className="mr-3 p-light"> Watch Stream</p>
					<img src={externalLinkIcon} alt="External link icon" />
				</div>
			</div>
			<div className="relative z-10 sm:right-0 sm:left-0 sm:m-auto">
				<Button
					text={'Send Challenge'}
					bg={'blue'}
					icon={'challenge'}
					size={'full'}
					location={'/challenges/1'}
				/>
			</div>
			<p className="p-mid mt-3 sm:mt-20"> Next in Queue</p>

			{listData.map((cv) => {
				return <Challenge contents={cv.challenge} user={cv.user} tag={cv.type} key={cv.id} id={cv.id} />;
			})}
		</div>
	);
};

export default QueueView;

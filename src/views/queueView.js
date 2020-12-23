import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { EntriesContext } from '../global/entriesContext';
import { StreamContext } from '../global/streamContext';
// Component
import Button from '../utils/Button';
import Challenge from '../baseComponents/Challenge';

// Assets
import profilePhoto from '../assets/profilePhoto.png';
import externalLinkIcon from '../assets/icons/externalLinkIcon.svg';

const QueueView = () => {
	const [ entries, setEntries ] = useContext(EntriesContext);
	const [ stream, setStream ] = useContext(StreamContext);

	return (
		<div className="container px-3 mx-auto max-w-3/4 mt-4">
			<img
				src="https://wallpapercave.com/wp/wp5825925.jpg"
				className=" w-full bg-no-repeat absolute top-0 left-0 z-0"
				style={{ height: '203px' }}
			/>
			<div
				style={{ height: '203px' }}
				className=" bg-black opacity-80 w-full bg-no-repeat absolute top-0 left-0 z-0"
			/>
			<div className="flex flex-col relative z-10 h-40 justify-center">
				<div className="flex items-center ">
					<div className=" w-3 h-3 rounded-lg bg-green mr-2 " />
					<p className="p-light"> Playing</p>
				</div>
				<h2 className="h2-light mt-1 mb-4"> Call of Duty: Warzone</h2>
				<div className="flex items-center">
					<img className="mr-3" src={profilePhoto} alt="Streamer Avatar" />
					<p className="mr-3 p-light"> Watch Stream</p>
					<img src={externalLinkIcon} alt="External link icon" />
				</div>
			</div>
			<div className="relative z-10">
				<Button text={'Send Challenge'} bg={'blue'} icon={'challenge'} size={'full'} />
			</div>
			<p className="p-mid mt-3"> Next in Queue</p>
			<div />
		</div>
	);
};

export default QueueView;

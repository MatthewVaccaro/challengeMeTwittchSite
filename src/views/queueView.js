import React, { useState, useEffect, useContext } from 'react';
import { EntriesContext } from '../global/entriesContext';
import { StreamContext } from '../global/streamContext';
// Component
import Button from '../utils/Button';
import Challenge from '../baseComponents/Challenge';
import Header from '../baseComponents/header';

//Request
import { GET_streamer, GET_entries } from '../axios/publicRequests';

// Assets
import profilePhoto from '../assets/profilePhoto.png';
import externalLinkIcon from '../assets/icons/externalLinkIcon.svg';

const QueueView = () => {
	const [ entries, setEntries ] = useContext(EntriesContext);
	const [ stream, setStream ] = useContext(StreamContext);

	const streamUsername = window.location.href.split('/');

	useEffect(() => {
		GET_streamer(streamUsername[streamUsername.length - 1])
			.then((res) => {
				setStream(res.data[0]);
				GET_entries(res.data[0].game_id_fk).then((res) => {
					setEntries(res.data);
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// useEffect(() => {
	// 	axios
	// 		.get('http://localhost:4000/api/userApp/allEntries/1')
	// 		.then((res) => {
	// 			console.log(res);
	// 			setEntries(res.data);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// }, []);

	return (
		<div className="container px-3 mx-auto max-w-3/4 mt-4 sm:max-w-5xl sm:mt-0 sm:flex sm:flex-col sm:justify-center">
			<Header />
			<div className="flex flex-col relative z-10 h-40 justify-center sm: mt-4">
				<div className="flex items-center sm:justify-center">
					<div className=" w-3 h-3 rounded-lg bg-green mr-2 " />
					<p
						onClick={() => {
							console.log('This is stream in queue', stream);
						}}
						className="p-light"
					>
						{' '}
						Playing
					</p>
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

			{entries ? (
				entries.map((cv) => {
					return (
						<Challenge
							contents={cv.content}
							user={cv.challenger}
							tag={cv.type}
							key={cv.id}
							id={cv.id}
							upvote={cv.upvote}
						/>
					);
				})
			) : (
				''
			)}
		</div>
	);
};

export default QueueView;

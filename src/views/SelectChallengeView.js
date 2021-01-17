import React, { useState, useEffect, useContext } from 'react';
import { EntriesContext } from '../global/entriesContext';
import { StreamContext } from '../global/streamContext';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
//Request
import { GET_challenges, POST_entry, POST_customChallenge, PUT_upvote } from '../axios/publicRequests';
//Animation
import { buttonPop, position } from '../animationVariants';

//Components
import Back from '../utils/Back';
import Input from '../utils/Input';
import Card from '../utils/Card';
import Radio from '../utils/radio';
import { findColor } from '../utils/colorTypes';
import TypeTab from '../baseComponents/typeTab';
import Button from '../utils/Button';
import Notification from '../baseComponents/notification';
const SelectChallengeView = (props) => {
	const [ entries, setEntries ] = useContext(EntriesContext);
	const [ stream, setStream ] = useContext(StreamContext);
	const gameID = props.match.params.id;
	const username = props.match.params.username;

	let history = useHistory();

	const [ challenges, setChallenges ] = useState();

	const [ select, setSelect ] = useState({
		challenger: '',
		content: '',
		challenge_id_fk: '',
		customChallenge: ''
	});

	console.log('data', stream, entries, select);

	const [ notification, setNotification ] = useState();
	const [ type, setType ] = useState('meme');

	useEffect(() => {
		GET_challenges(gameID)
			.then((res) => {
				setChallenges(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(
		() => {
			if (type === 'custom') {
				setSelect({ ...select, customChallenge: '', challenge_id_fk: '' });
			}
		},
		[ type ]
	);

	return (
		<div>
			{stream ? (
				<div className="container px-3 mx-auto sm:max-w-5xl">
					{notification ? notification === 'success' || notification === 'upvote' ? (
						<motion.div
							className="absolute z-20 w-full left-0"
							initial="start"
							animate="end"
							variants={position}
							transition={{ ease: 'easeIn', duration: 0.5 }}
						>
							<Notification status={notification === 'upvote' ? 'upvote' : true} />
						</motion.div>
					) : (
						<motion.div
							className="absolute z-20 w-full left-0"
							initial="start"
							animate="end"
							variants={position}
							transition={{ ease: 'easeIn', duration: 0.5 }}
						>
							<Notification status={false} />
						</motion.div>
					) : (
						''
					)}

					<Back />
					<h1 className="h1-dark mt-2 mb-8 ">{challenges ? challenges[0].title : ''} Challenges</h1>
					<Input
						name={'challenger'}
						placeholder={'Enter Your name'}
						label={'Initiator’s Name'}
						value={select.challenger}
						setState={setSelect}
						state={select}
						type={'text'}
					/>

					<TypeTab state={type} setState={setType} />
					<p className="p-mid font-semibold">
						<span className={`text-${findColor(type)[1]} capitalize`}>{type}</span> Challenges
					</p>
					{type === 'custom' ? (
						<Input
							name={'customChallenge'}
							placeholder={'Enter Custom Challenge Here'}
							label={''}
							value={select.customChallenge}
							setState={setSelect}
							state={select}
							type={'text'}
						/>
					) : challenges ? (
						challenges.map((cv) => {
							if (cv.type === type) {
								return (
									<motion.div>
										<Card
											id={cv.id}
											header={cv.content}
											leftElement={
												<Radio obj={cv} state={select} setState={setSelect} key={cv.id} />
											}
										/>
									</motion.div>
								);
							}
						})
					) : (
						''
					)}
					<motion.div
						className="absolute bottom-0"
						initial="start"
						animate={
							(select.challenger && select.challenge_id_fk) ||
							(select.challenger && select.customChallenge) ? (
								'end'
							) : (
								''
							)
						}
						variants={buttonPop}
						transition={{ type: 'spring', damping: 10, duration: 0.3 }}
						onClick={() => {
							if (select.challenger && select.customChallenge) {
								return POST_customChallenge(gameID, {
									type: 'custom',
									content: select.customChallenge
								})
									.then((res) => {
										POST_entry(gameID, {
											challenge_id_fk: res.data[0].id,
											challenger: select.challenger
										})
											.then(() => {
												setNotification('success');
												setTimeout(() => {
													history.push(`/${username}`);
												}, 3000);
											})
											.catch((error) => {
												setNotification('error');
												console.log(error);
												setTimeout(() => {
													setNotification('');
												}, 3000);
											});
									})
									.catch((err) => {
										setNotification('error');
										console.log(err);
										setTimeout(() => {
											setNotification('');
										}, 3000);
									});
							}
							else {
								const findDuplicate =
									entries.length > 0
										? entries.filter((entry) => {
												return entry.content === select.content;
											})
										: '';

								if (findDuplicate.length > 0) {
									console.log('ran');
									return PUT_upvote(findDuplicate.id, { vote: 'plus' })
										.then(() => {
											setNotification('upvote');
											setTimeout(() => {
												history.push(`/${username}`);
											}, 3000);
										})
										.catch((error) => {
											setNotification('error');
											console.log(error);
											setTimeout(() => {
												setNotification('');
											}, 3000);
										});
								}
								else {
									return POST_entry(gameID, select)
										.then(() => {
											setNotification('success');
											setTimeout(() => {
												history.push(`/${username}`);
											}, 3000);
										})
										.catch((error) => {
											setNotification('error');
											console.log(error);
											setTimeout(() => {
												setNotification('');
											}, 3000);
										});
								}
							}
						}}
					>
						<Button text={'Send Challenge'} bg={'blue'} icon={'challenge'} />
					</motion.div>
				</div>
			) : (
				<div className="container px-3 mx-auto sm:max-w-5xl">
					<Back />
					<h1 className="h1-dark mt-2 mb-8 "> User Isn't currently taking challenges. </h1>
				</div>
			)}
		</div>
	);
};

export default SelectChallengeView;

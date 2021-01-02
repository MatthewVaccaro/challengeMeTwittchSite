import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
//Request
import { GET_challenges, POST_entry, POST_customChallenge } from '../axios/publicRequests';

//Components
import Back from '../utils/Back';
import Input from '../utils/Input';
import Card from '../utils/Card';
import Radio from '../utils/radio';
import colorTypes from '../utils/colorTypes';
import TypeTab from '../baseComponents/typeTab';
import Button from '../utils/Button';
import Notification from '../baseComponents/notification';
const SelectChallengeView = (props) => {
	// * Get id and username
	const gameID = props.match.params.id;
	const username = props.match.params.username;
	// * used for moving history
	let history = useHistory();
	// * state for all challenges from DB
	const [ challenges, setChallenges ] = useState();
	// * object being sent to the DB
	const [ select, setSelect ] = useState({
		challenger: '',
		challenge_id_fk: '',
		customChallenge: ''
	});

	const [ notification, setNotification ] = useState();

	const position = {
		start: { top: '-100px', opacity: '0%' },
		end: { top: '0px', opacity: '100%' }
	};

	const buttonPop = {
		end: {
			left: '45%',
			transform: 'translate(-45%, -30%)',
			display: 'block'
		},
		start: {
			left: '45%',
			transform: 'translate(-45%, 100%)',
			display: 'none'
		}
	};

	useEffect(() => {
		GET_challenges(gameID)
			.then((res) => {
				setChallenges(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const [ type, setType ] = useState('meme');
	const color = colorTypes.filter((cv) => {
		if (cv[0] === type) {
			return cv;
		}
	});

	useEffect(
		() => {
			if (type === 'custom') {
				setSelect({ ...select, customChallenge: '', challenge_id_fk: '' });
			}
		},
		[ type ]
	);

	return (
		<div className="container px-3 mx-auto sm:max-w-5xl">
			{notification ? notification === 'success' ? (
				<motion.div
					className="absolute z-20 w-full left-0"
					initial="start"
					animate="end"
					variants={position}
					transition={{ ease: 'easeIn', duration: 0.5 }}
				>
					<Notification status={true} />
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
				<span className={`text-${color[0][1]} capitalize`}>{type}</span> Challenges
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
									header={cv.content}
									leftElement={<Radio obj={cv} state={select} setState={setSelect} key={cv.id} />}
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
					(select.challenger && select.challenge_id_fk) || (select.challenger && select.customChallenge) ? (
						'end'
					) : (
						''
					)
				}
				variants={buttonPop}
				transition={{ type: 'spring', damping: 10, duration: 0.3 }}
				onClick={() => {
					// * this onclick is looking to see if the type is custom. If the challenge is custom
					// * we need to create a customer challenge first before creating the entry.
					if (select.challenger && select.customChallenge) {
						// * Found to be custom so chain the axios calls
						return POST_customChallenge(gameID, {
							type: 'custom',
							content: select.customChallenge
						})
							.then((res) => {
								POST_entry(gameID, { challenge_id_fk: res.data[0].id, challenger: select.challenger })
									.then(() => {
										setNotification('success');
										setTimeout(() => {
											history.push(`/${username}`);
										}, 3000);
									})
									.catch((error) => {
										setNotification('error');
										console.log(error);
									});
							})
							.catch((err) => console.log(err));
					}
					else {
						// * Since above isnt met then it's not custom
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
							});
					}
				}}
			>
				<Button text={'Send Challenge'} bg={'blue'} icon={'challenge'} />
			</motion.div>
		</div>
	);
};

export default SelectChallengeView;

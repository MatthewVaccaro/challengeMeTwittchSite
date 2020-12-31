import React, { useState, useEffect } from 'react';
//Request
import { GET_challenges } from '../axios/publicRequests';
//Components
import Back from '../utils/Back';
import Input from '../utils/Input';
import Card from '../utils/Card';
import Radio from '../utils/radio';
import colorTypes from '../utils/colorTypes';
import TypeTab from '../baseComponents/typeTab';
import Button from '../utils/Button';
const SelectChallengeView = (props) => {
	const game = props.match.params.id;
	const [ challenges, setChallenges ] = useState();
	// * object being sent to the DB
	const [ select, setSelect ] = useState({
		challenger: '',
		challenge_id_fk: ''
	});

	useEffect(() => {
		GET_challenges(game)
			.then((res) => {
				console.log(res.data);
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
			if (type === 'Custom') {
				setSelect({ ...select, challenge: '' });
			}
		},
		[ type ]
	);

	return (
		<div className="container px-3 mx-auto sm:max-w-5xl">
			<Back />
			<h1
				onClick={() => {
					console.log(challenges);
				}}
				className="h1-dark mt-2 mb-8 "
			>
				{challenges ? challenges[0].title : ''} Challenges
			</h1>
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
					name={'challenge'}
					placeholder={'Enter Custom Challenge Here'}
					label={''}
					value={select.challenge}
					setState={setSelect}
					state={select}
					type={'text'}
				/>
			) : challenges ? (
				challenges.map((cv) => {
					if (cv.type === type) {
						return (
							<Card
								header={cv.content}
								leftElement={<Radio obj={cv} state={select} setState={setSelect} />}
							/>
						);
					}
				})
			) : (
				''
			)}
			<div
				className="absolute bottom-0 transition-all duration-300 "
				style={
					select.challenger && select.challenge_id_fk ? (
						{
							left: '45%',
							transform: 'translate(-45%, -10%)'
						}
					) : (
						{ display: 'none' }
					)
				}
			>
				<Button text={'Send Challenge'} bg={'blue'} icon={'challenge'} />
			</div>
		</div>
	);
};

export default SelectChallengeView;

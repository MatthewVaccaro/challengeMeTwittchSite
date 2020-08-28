import React, { useState } from 'react';
// ! This component will have to return state to the other form fields
const TypeInput = () => {
	/* 
    The selected state
    when choosing another state it deselects current
    */

	const [ select, setSelect ] = useState([
		{
			name: 'Meme',
			selected: true
		},
		{
			name: 'Tough',
			selected: false
		},
		{
			name: 'Troll',
			selected: false
		}
	]);

	const toggle = () => {};
	return (
		<div>
			<p className="opacity75 marginTop25 "> Challenge Type</p>
			<div
				onClick={() => {
					toggle();
				}}
				className="inputContainer flex justifyContentSpaceBetween marginTop5"
			>
				<div
					onClick={() => {
						setSelect([
							{
								name: 'Meme',
								selected: true
							},
							{
								name: 'Tough',
								selected: false
							},
							{
								name: 'Troll',
								selected: false
							}
						]);
					}}
					className={`typeContainer ${select[0].selected == true ? 'greenBG' : ''}`}
				>
					<h3 className={`${select[0].selected == true ? 'white' : ''}`}> Meme </h3>
				</div>
				<div
					onClick={() => {
						setSelect([
							{
								name: 'Meme',
								selected: false
							},
							{
								name: 'Tough',
								selected: true
							},
							{
								name: 'Troll',
								selected: false
							}
						]);
					}}
					className={`typeContainer ${select[1].selected == true ? 'yellowBG' : ''}`}
				>
					<h3 className={`${select[1].selected == true ? 'white' : ''}`}> Tough </h3>
				</div>
				<div
					onClick={() => {
						setSelect([
							{
								name: 'Meme',
								selected: false
							},
							{
								name: 'Tough',
								selected: false
							},
							{
								name: 'Troll',
								selected: true
							}
						]);
					}}
					className={`typeContainer ${select[2].selected == true ? 'redBG' : ''}`}
				>
					<h3 className={`${select[2].selected == true ? 'white' : ''}`}> Troll </h3>
				</div>
			</div>
		</div>
	);
};

export default TypeInput;

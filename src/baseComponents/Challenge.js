import React, { useState } from 'react';
import Tag from './tag';
import darkChallengeIcon from '../assets/icons/darkChallengeIcon.svg';
import axios from 'axios';
import Upvote from './upvote';

const Challenge = ({ contents, user, tag, upvote, data }) => {
	function axiosUpvote(data) {
		axios
			.put(`http://localhost:4000/api/userApp/entryUpVote/${data.id}`, { vote: 'plus' })
			.then((res) => {
				return res.data;
			})
			.catch((err) => {
				return console.log(err);
			});
	}
	return (
		<div className={`flex-col shadow-xl rounded bg-white my-3`}>
			<div className="pt-3 px-3 pb-2">
				<Tag text={tag} />
				<h2 className="h2-dark mt-2">{contents}</h2>
			</div>
			<div className=" px-3 py-2 bg-white_100 flex justify-between items-center ">
				<div className="flex flex-col">
					<div className="flex">
						<img src={darkChallengeIcon} alt="Challenge Icon" />
						<p className="p-mid ml-3 "> Challenger </p>
					</div>
					<div className="flex ">
						<h3 className="h3-dark mr-2">{user} </h3>

						{upvote ? (
							<div className=" bg-white_200 py-px2 px-1 rounded">
								<p className="p-dark"> + {upvote} </p>
							</div>
						) : (
							''
						)}
					</div>
				</div>
				<Upvote id={data.id} />
			</div>
		</div>
	);
};

export default Challenge;

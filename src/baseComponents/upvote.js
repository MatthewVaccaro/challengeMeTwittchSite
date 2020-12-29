import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PUT_upvote } from '../axios/publicRequests';

import { EntriesContext } from '../global/entriesContext';

const Upvote = ({ id }) => {
	const [ entries, setEntries ] = useContext(EntriesContext);
	const [ toggle, setToggle ] = useState(false);

	function updateUpvote() {
		if (toggle) {
			PUT_upvote(id, { vote: 'minus' })
				.then((res) => {
					const updatedEntries = entries.filter((entry) => {
						return entry.id != id;
					});
					updatedEntries.push(res.data[0]);

					updatedEntries.sort(function(a, b) {
						return b.upvote - a.upvote;
					});
					setEntries(updatedEntries);
					setToggle(!toggle);
				})
				.catch((err) => {
					console.log(err);
				});
		}
		else {
			PUT_upvote(id, { vote: 'plus' })
				.then((res) => {
					const updatedEntries = entries.filter((entry) => {
						return entry.id != id;
					});
					updatedEntries.push(res.data[0]);
					updatedEntries.sort(function(a, b) {
						return b.upvote - a.upvote;
					});
					setEntries(updatedEntries);
					setToggle(!toggle);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}

	return (
		<div
			onClick={() => {
				updateUpvote();
			}}
			style={{ width: '50px', height: '50px' }}
			className={`flex justify-center items-center rounded-md transition-all duration-300 ${toggle
				? 'bg-green'
				: 'bg-blue'}`}
		>
			<h3 className="h3-light">+1</h3>
		</div>
	);
};

export default Upvote;

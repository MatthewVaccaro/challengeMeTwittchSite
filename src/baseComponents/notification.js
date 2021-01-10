import React from 'react';
import { motion } from 'framer-motion';
// Animation
import { size } from '../animationVariants';
//Assets
import successIcon from '../assets/icons/successIcon.svg';
import errorIcon from '../assets/icons/errorIcon.svg';

const Notification = ({ status }) => {
	const message = status
		? status === 'upvote' ? 'Challenge Upvoted!' : 'Challenge submitted!'
		: 'Something went wrong!';
	return (
		<div className="bg-white shadow-lg rounded flex pt-2  flex-col">
			<div className="flex">
				<img src={status ? successIcon : errorIcon} alt="sword icon" className="mx-3" />
				<div className="w-full mb-2 mr-3">
					<h3 className="h3-dark">{message}</h3>
					<p className="p-mid">{status ? 'Redircting to queue' : 'Retry submitting in 3 seconds'}</p>
				</div>
			</div>
			<div className="w-full h-2 rounded-b bg-white_100">
				<motion.div
					initial="start"
					animate="end"
					variants={size}
					transition={{ duration: 3, delay: 0.3 }}
					className={`h-2 rounded-b rounded-tr ${status ? 'bg-green' : 'bg-red'}`}
				/>
			</div>
		</div>
	);
};

export default Notification;

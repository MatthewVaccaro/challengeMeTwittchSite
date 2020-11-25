import React from 'react';

const Radio = ({ obj, state, setState }) => {
	const toggle = state.challenge === obj.title ? true : false;
	return (
		<div
			onClick={() => {
				setState({ ...state, challenge: obj.title });
			}}
			className={`bg-white_100 w-6 h-6 rounded-2xl flex items-center justify-center mr-4`}
			style={{ minHeight: '1.5rem', minWidth: '1.5rem' }}
		>
			<div
				className={`bg-blue  rounded-2xl transition-all duration-300 ${toggle
					? 'opacity-100 w-6 h-6'
					: 'opacity-0 w-1 h-1 '}`}
			/>
		</div>
	);
};

export default Radio;

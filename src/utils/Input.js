import React, { useState } from 'react';

const Input = ({ name, placeholder, type, label, value, setState, state, width }) => {
	const [ error, setError ] = useState(false);

	function changeHander(e) {
		e.preventDefault();
		setState({ ...state, [e.target.name]: e.target.value });
	}

	return (
		<div className="my-4 flex flex-col">
			<label className="p-mid font-semibold"> {label} </label>
			<input
				className={`w-${width
					? width
					: 'full'} py-3 px-4 h3-dark rounded border-2 border-white_100 focus:border-red`}
				name={name}
				type={type ? type : 'text'}
				placeholder={placeholder}
				onChange={changeHander}
				value={value}
				onBlur={(e) => {
					if (type === 'text') {
						if (value.length < 3) {
							setError(true);
						}
						else {
							setError(false);
						}
					}
				}}
			/>
			{error ? <p className="text-red font-base mt-2"> {label} requires 3 characters </p> : ''}
		</div>
	);
};

export default Input;

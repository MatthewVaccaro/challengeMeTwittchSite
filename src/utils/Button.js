import React from 'react';

const Button = ({ size, text, bg, textColor, icon }) => {
	const buttonSize = size === 'full' ? 'flex justify-center' : 'flex';
	return (
		<div className={size ? '' : 'inline-block'}>
			<div
				className={`bg-${bg} hover:bg-${bg}_100 transition-all duration-300 rounded-md px-6 py-3 ${buttonSize}`}
			>
				{icon ? <img className="mr-3" src={icon} alt="Icon" /> : ''}
				<p className="text-base text-white font-medium text-center"> {text}</p>
			</div>
		</div>
	);
};

export default Button;

import React from 'react';

const Card = ({ id, image, header, sub, icon, leftElement, challengeID }) => {
	return (
		<div>
			<div className="bg-white shadow-lg rounded my-3 p-3 flex justify-between items-center ">
				<div className="flex items-center">
					{leftElement}
					<div className="flex-col">
						<h3 className="h3-dark"> {header}</h3>
						<p className="p-mid"> {sub} </p>
					</div>
				</div>
				<img src={icon} />
			</div>
			{challengeID === id ? <p>Disabled</p> : ''}
		</div>
	);
};

export default Card;

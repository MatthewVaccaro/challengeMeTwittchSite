import React from 'react';

const GameHeader = ({ gif, gameName }) => {
	return (
		<div>
			<div className={`gifHeader ${gif}`}>
				<h2> {gameName}</h2>
			</div>
		</div>
	);
};

export default GameHeader;

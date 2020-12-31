import React from 'react';
import colorTypes from '../utils/colorTypes';

const TypeTab = ({ state, setState }) => {
	const section = [ '0%', '25%', '50%', '75%' ];

	let currentSection = '';
	for (let i = 0; i < colorTypes.length; i++) {
		if (colorTypes[i][0] === state) {
			currentSection = i;
		}
	}
	return (
		<div>
			<div className=" relative w-full h-16 bg-white shadow-lg rounded flex justify-between items-center mb-8 ">
				<div
					style={{ left: section[currentSection] }}
					className={`absolute w-1/4 h-16 rounded transition-all duration-300 bg-${colorTypes[
						currentSection
					][1]}`}
				/>
				{colorTypes.map((cv) => {
					return (
						<div
							onClick={() => {
								setState(cv[0]);
							}}
							className={`w-full h-full transition-all duration-300 rounded-md z-10`}
						>
							<p
								className={`capitalize ${state === cv[0]
									? 'h3-light'
									: 'h3-dark'} text-center py-4 transition-all duration-300`}
							>
								{cv[0]}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TypeTab;

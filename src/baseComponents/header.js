import React, { useState } from 'react';

const Header = ({ image }) => {
	const initialHeight = window.innerWidth > 600 ? '282px' : '203px';
	const [ height, setHeight ] = useState(initialHeight);

	function reportWindowSize() {
		if (window.innerWidth > 600 && height === '203px') {
			setHeight('282px');
		}
		if (window.innerWidth < 600 && height === '282px') {
			setHeight('203px');
		}
	}

	window.onresize = reportWindowSize;
	return (
		<div>
			<img
				src={image ? image : 'https://wallpapercave.com/wp/wp5825925.jpg'}
				className=" w-full bg-no-repeat absolute top-0 left-0 z-0 sm:max-w-5xl object-cover sm:rounded-b-3xl sm:m-auto sm:right-0"
				style={{ height: height }}
			/>
			<div
				style={{ height: height }}
				className=" bg-black opacity-80 w-full bg-no-repeat absolute top-0 left-0 z-0 sm:max-w-5xl sm:rounded-b-3xl sm:m-auto sm:right-0"
			/>
		</div>
	);
};

export default Header;

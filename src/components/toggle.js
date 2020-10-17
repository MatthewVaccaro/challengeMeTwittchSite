import React, { useState } from 'react';
import '../css/components.css';

const Toggle = (props) => {
	const [ toggle, setToggle ] = useState(false);
	return (
		<div
			onClick={() => {
				setToggle(!toggle);
			}}
			className="toggleContainer"
		>
			<div className={`circle ${toggle === false ? 'right' : 'left'} `} />
			<div className={`rail ${toggle === false ? 'active' : 'inactive'} `} />
		</div>
	);
};

export default Toggle;

// ! needs to make an api call when the toggle is switched

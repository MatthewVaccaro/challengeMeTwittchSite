import React, { createContext, useState } from 'react';

export const StreamContext = createContext();

export const StreamProvider = (props) => {
	const [ stream, setStream ] = useState(null);

	return <StreamContext.Provider value={[ stream, setStream ]}>{props.children}</StreamContext.Provider>;
};

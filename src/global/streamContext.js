import React, { createContext, useState } from 'react';

export const StreamContext = createContext();

export const StreamProvider = (props) => {
	const [ stream, setStream ] = useState();

	return <StreamContext.Provider value={[ stream, setStream ]}>{props.children}</StreamContext.Provider>;
};

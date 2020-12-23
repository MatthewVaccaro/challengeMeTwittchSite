import React, { createContext, useState } from 'react';

export const EntriesContext = createContext();

export const EntriesProvider = (props) => {
	const [ entries, setEntries ] = useState(null);

	return <EntriesContext.Provider value={[ entries, setEntries ]}>{props.children}</EntriesContext.Provider>;
};

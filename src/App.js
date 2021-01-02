import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//State
import { EntriesProvider } from './global/entriesContext';
import { StreamProvider } from './global/streamContext';

//Views
import queueView from './views/queueView';
import SelectChallengeView from './views/SelectChallengeView';
import selectGameView from './views/selectGameView';
import Dashboard from './views/dashboard';
import AddGame from './views/addGame';
import Notification from './baseComponents/notification';
//Components
function App() {
	return (
		<div className="App">
			<Route exact path="/dashboard" component={Dashboard} />
			<Route exact path="/addgame" component={AddGame} />
			{/* <Route exact path="/:game/:id" component={EditChallengeView} /> */}
			{/* Streamer 👆 User 👇 */}
			<StreamProvider>
				<EntriesProvider>
					<Route exact path="/:username" component={queueView} />
				</EntriesProvider>
				<Route exact path="/selectGame" component={selectGameView} />
				<Route exact path="/:username/challenges/:id" component={SelectChallengeView} />
				<Route exact path="/test/test" component={Notification} />
			</StreamProvider>
		</div>
	);
}

export default App;

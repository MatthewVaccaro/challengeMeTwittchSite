import React from 'react';
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
import CurrentChallenge from './baseComponents/CurrentChallenge';
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
					<Route exact path="/" component={queueView} />
				</EntriesProvider>
				<Route exact path="/selectGame" component={selectGameView} />
				<Route exact path="/challenges/:id" component={SelectChallengeView} />
			</StreamProvider>
		</div>
	);
}

export default App;

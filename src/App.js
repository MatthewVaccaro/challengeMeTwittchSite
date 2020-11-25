import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//Views
import queueView from './views/queueView';
import SelectChallengeView from './views/SelectChallengeView';
import selectGameView from './views/selectGameView';
import Dashboard from './views/dashboard';
import AddGame from './views/addGame';
import EditChallengeView from './views/EditChallengeView';
import CurrentChallenge from './baseComponents/CurrentChallenge';
//Components
function App() {
	return (
		<div className="App">
			<Route exact path="/dashboard" component={Dashboard} />
			<Route exact path="/addgame" component={AddGame} />
			{/* <Route exact path="/:game/:id" component={EditChallengeView} /> */}
			{/* Streamer 👆 User 👇 */}
			<Route exact path="/" component={queueView} />
			<Route exact path="/selectGame" component={selectGameView} />
			<Route exact path="/challenges/:id" component={SelectChallengeView} />
			<Route exact path="/test" component={CurrentChallenge} />
		</div>
	);
}

export default App;

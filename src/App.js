import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//Views
import queueView from './views/queueView';
import challengeView from './views/challengeView';
import selectGameView from './views/selectGameView';
import Dashboard from './views/dashboard';
import AddGame from './views/addGame';
import singleGameView from './views/singleGameView';
//Components
import Button from './components/button';
function App() {
	return (
		<div className="App">
			<Route exact path="/dashboard" component={Dashboard} />
			<Route exact path="/addgame" component={AddGame} />
			<Route exact path="/:game/:id" component={singleGameView} />
			<Route exact path="/" component={queueView} />
			<Route exact path="/selectGame" component={selectGameView} />
			<Route exact path="/challenges/:id" component={challengeView} />

			{/* ^ The route about will most likely need an id attribute - Id will point to which game */}
		</div>
	);
}

export default App;

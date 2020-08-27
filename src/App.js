import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
//Views
import queueView from './views/queueView';
import challengeView from './views/challengeView';
import selectGameView from './views/selectGameView';
//Components
import Button from './components/button';
function App() {
	return (
		<div className="App">
			<Route exact path="/" component={queueView} />
			<Route exact path="/selectGame" component={selectGameView} />
			<Route exact path="/challenges/:id" component={challengeView} />

			{/* ^ The route about will most likely need an id attribute - Id will point to which game */}
		</div>
	);
}

export default App;

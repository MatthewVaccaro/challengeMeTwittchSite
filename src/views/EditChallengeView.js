import React from 'react';
import backIcon from '../assets/icons/backIcon.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const EditChallengeView = (props) => {
	const id = props.match.params.id;
	const game = props.match.params.game;

	return <div className="container">Hello</div>;
};

export default EditChallengeView;

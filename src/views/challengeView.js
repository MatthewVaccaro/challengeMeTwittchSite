import React from 'react';
import '../css/challengeView.css';
//Components
import GameHeader from '../components/gameHeader';
import TypeInput from '../components/typeInput';
import Button from '../components/button';

import challengeIcon from '../assets/icons/challengeIcon.svg';
const ChallengeView = (props) => {
	const game = props.match.params.id;

	return (
		<div>
			<GameHeader gameName={game.split('-').join(' ')} gif={''} />
			<div className="viewPadding">
				<TypeInput />
				<form class=" ">
					<p className="opacity75 marginTop15 "> Provider</p>
					<input name="name" type="text" placeholder="boopers" />
					<p className="opacity75 marginTop15 "> Challenge</p>
					<select name="name" type="text">
						<option class="testThis" disabled selected value>
							Select a Challenge!
						</option>
						<option> Boop </option>
						<option> Doop </option>
						<option> Loop </option>
						<option> Coop </option>
					</select>
				</form>
				<div class="bottomButton">
					<Button
						link={'/'}
						exLink={false}
						color={'gradient'}
						icon={challengeIcon}
						text={'Create Challenge'}
					/>
				</div>
			</div>
		</div>
	);
};

export default ChallengeView;

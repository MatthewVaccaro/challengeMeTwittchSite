import React from 'react';
// Dep
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Card = ({ image, header, sub, icon, location, leftElement }) => {
	return (
		<div>
			{location ? (
				<div className="bg-white shadow-lg rounded my-3 p-3 flex justify-between items-center ">
					<Link to={location}>
						<div className="flex items-center">
							{leftElement}
							<div className="flex-col">
								<h3 className="h3-dark"> {header}</h3>
								<p className="p-mid"> {sub} </p>
							</div>
						</div>
						<img src={icon} />
					</Link>
				</div>
			) : (
				<div className="bg-white shadow-lg rounded my-3 p-3 flex justify-between items-center ">
					<div className="flex items-center">
						{leftElement}
						<div className="flex-col">
							<h3 className="h3-dark"> {header}</h3>
							<p className="p-mid"> {sub} </p>
						</div>
					</div>
					<img src={icon} />
				</div>
			)}
		</div>
	);
};

export default Card;

import React from 'react';
import Home from '../Home/Home';
import CardContainer from '../CardContainer/CardContainer';
import { Route, NavLink } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';

const Controls = props => {

	return (
		<section>
			<div>
				<NavLink to="/nowPlaying" className="nav">
					Going Out
				</NavLink>
				<NavLink to="/popular" className="nav">
					Staying In
				</NavLink>
				<SignIn signedIn={props.signedIn} />
			</div>
			<Route exact path="/" component={Home} />
			<Route exact path="/nowPlaying" component={() => <CardContainer category="nowPlaying"/>} />
			<Route exact path="/popular" component={() => <CardContainer category="popular"/>} />
		</section>
	);
};

export default Controls;

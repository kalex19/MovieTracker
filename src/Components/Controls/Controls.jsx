import React from 'react';
import Home from '../Home/Home';
import CardContainer from '../CardContainer/CardContainer';
import { Route, NavLink } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import CreateAccount from '../CreateAccount/CreateAccount';
import CardDetails from '../CardDetails/CardDetails';
import Styles from './Controls.scss';

const Controls = props => {
	// const nowPlaying = props.nowPlaying.nowPlaying;
	// const popular = props.popular.popular;
	return (
		<section className="controls">
			<div className="controlButtons">
				<NavLink to="/nowPlaying" className="nav">
					Going Out
				</NavLink>
				<NavLink to="/popular" className="nav">
					Staying In
				</NavLink>
				<NavLink to="/signIn">Sign In</NavLink>
			</div>
			<Route exact path="/" component={Home} />
			<Route exact path="/signIn" component={SignIn} />
			<Route exact path="/nowPlaying" component={() => <CardContainer category="nowPlaying" />} />
			<Route exact path="/popular" component={() => <CardContainer category="popular" />} />
			<Route exact path="/createAccount" component={CreateAccount} />
			{/* <Route
				path="/popluar/:id"
				render={({ match }) => {
					const { id } = match.params;
					const card = popular.find(movie => movie.id === parseInt(id));
					if (card) {
						return <CardDetails {...card} />;
					}
				}}
			/>
			<Route
				path="/nowPlaying/:id"
				render={({ match }) => {
					const { id } = match.params;
					const card = nowPlaying.find(movie => movie.id === parseInt(id));
					if (card) {
						return <CardDetails {...card} />;
					}
				}}
			/> */}
		</section>
	);
};

export default Controls;

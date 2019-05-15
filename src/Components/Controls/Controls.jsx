import React from 'react';
import Home from '../Home/Home';
import CardContainer from '../CardContainer/CardContainer';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SignIn from '../SignIn/SignIn';
import SignOut from '../SignOut/SignOut';
import CreateAccount from '../CreateAccount/CreateAccount';
import {CardDetails} from '../CardDetails/CardDetails';
import './Controls.scss';
import PropTypes from 'prop-types';

export const Controls = props => {
	const popular = props.popular;
	const nowPlaying = props.nowPlaying;

	let inNOut;
	 inNOut = props.isLoggedIn ? (
		 <NavLink to='/signOut'>Sign Out</NavLink> 

	 )
	 :	(
		 <NavLink to="/signIn">Sign In</NavLink>	 
	 )

	return (
		<section className="controls">
			<div className="controlButtons">
				<NavLink to="/nowPlaying" className="nav">
					In Theaters
				</NavLink>
				<NavLink to="/popular" className="nav">
					Popular
				</NavLink>
				{inNOut}
				
			</div>
			<Route exact path="/" component={Home} />
			<Route exact path="/signIn" component={SignIn} />
			<Route exact path="/signOut" component={SignOut}/>
			<Route exact path="/nowPlaying" component={() => <CardContainer category="nowPlaying" />} />
			<Route exact path="/popular" component={() => <CardContainer category="popular" />} />
			<Route exact path="/createAccount" component={CreateAccount} />
			<Route
				path="/popular/:id"
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
			/>
		</section>
	);
};

const mapStateToProps = ({ popular, nowPlaying, isLoggedIn }) => ({
	popular,
	nowPlaying,
	isLoggedIn
});

export default connect(mapStateToProps)(Controls);

Controls.propTypes = {
	handleChange: PropTypes.func,
	password: PropTypes.string
};


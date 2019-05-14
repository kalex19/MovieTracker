import React from 'react';
import Home from '../Home/Home';
import CardContainer from '../CardContainer/CardContainer';
import { Route, NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import SignIn from '../SignIn/SignIn';
import CreateAccount from '../CreateAccount/CreateAccount';
import CardDetails from '../CardDetails/CardDetails';
import Styles from './Controls.scss';

const Controls = props => {
	const popularProps = props.popular;
	const nowPlayingProps = props.nowPlaying;
	const popular = popularProps.popular;
	const nowPlaying = nowPlayingProps.nowPlaying;



	return (
		<section className="controls">
			<div className="controlButtons">
				<NavLink to="/nowPlaying" className="nav">
					In Theaters
				</NavLink>
				<NavLink to="/popular" className="nav">
					Popular
				</NavLink>
				<NavLink to="/signIn">Sign In</NavLink>
			</div>
			<Route exact path="/" component={Home} />
			<Route exact path="/signIn" component={SignIn} />
			<Route exact path="/nowPlaying" component={() => <CardContainer category="nowPlaying" />} />
			<Route exact path="/popular" component={() => <CardContainer category="popular" />} />
			<Route exact path="/createAccount" component={CreateAccount} />
			<Route 
			 path='popular/:id' render={({ match }) => {
				console.log("matchid",match.params.id, "match", match)
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

const mapStateToProps = ({popular, nowPlaying}) => ({
	popular,
	nowPlaying
})

export default connect(mapStateToProps)(Controls);

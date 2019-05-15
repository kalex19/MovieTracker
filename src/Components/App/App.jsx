import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Controls from '../Controls/Controls';
import { fetchPopular } from '../../Thunks/fetchPopular';
import { fetchNowPlaying } from '../../Thunks/fetchNowPlaying';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {urlPopular, urlNowPLaying} from '../../Util/ApiCalls/urls'
import  './App.scss';
import PropTypes from 'prop-types';
import Images from '../../images/popcorn.png';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			signedIn: false,
			favorites: []
		};
	}

	componentDidMount() {
		this.props.fetchPopular(urlPopular);
		this.props.fetchNowPlaying(urlNowPLaying);
	}

	render() {
	console.log(this.props.isLoggedIn)

		let display = this.props.isLoading ? (
			<section>Loading...</section>
		) : (
			<Controls signedIn={this.state.signedIn} favorites={this.state.favorites} />
		);

		let inNOut;
	 inNOut = this.props.isLoggedIn ? (
		 <NavLink to='/signOut' className="loginBtn">Sign Out</NavLink> 
	 )
	 :	(
		 <NavLink to="/signIn" className="loginBtn">Sign In</NavLink>	 
	 )

		return (
			<div className="App">
				<div className="title">
					<header>
						<h1 className="siteTitle">
							Movie<img src="../../images/popcorn.png" />Tracker
						</h1>
						<input type="text" className="searchInput" value="Search Movies...." />
						{inNOut}
					</header>
				</div>
				{display}
			</div>
		);
	}
}

export const mapStateToProps = ({ popular, nowPlaying, isLoading, isLoggedIn }) => ({
	popular,
	nowPlaying,
	isLoading,
	isLoggedIn
});

export const mapDispatchToProps = dispatch => ({
	fetchNowPlaying: url => dispatch(fetchNowPlaying(url)),
	fetchPopular: url => dispatch(fetchPopular(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
	fetchNowPlaying: PropTypes.func,
	fetchPopular: PropTypes.func,
	isLoading: PropTypes.bool,
	nowPlaying: PropTypes.object,
	popular: PropTypes.object
};

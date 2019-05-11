import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Controls from '../Controls/Controls';
import { fetchPopular } from '../../Thunks/fetchPopular';
import { fetchNowPlaying } from '../../Thunks/fetchNowPlaying';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import apiKey from '../../Util/ApiCalls/apiKey';

class App extends Component {
	constructor() {
		super();
		this.state = {
			signedIn: false,
			userName: '',
			filteredBy: '',
			favorites: [],
			category: ''
		};
	}

	componentDidMount() {
		const urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
		this.props.fetchPopular(urlPopular);
		const urlNowPLaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
		this.props.fetchNowPlaying(urlNowPLaying);
	}

	render() {
		let display = this.state.isLoading ? (
			<section>Loading...</section>
		) : (
			<Controls signedIn={this.state.signedIn} favorites={this.state.favorites} />
		);

		return (
			<div className="App">
				<div className="header-section">
					<header>
						<h1>Movie Tracker</h1>
						<input type="text" />
					</header>
				</div>
				{display}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	popular: state.popular,
	nowPlaying: state.nowPlaying
});

const mapDispatchToProps = dispatch => ({
	fetchNowPlaying: url => dispatch(fetchNowPlaying(url)),
	fetchPopular: url => dispatch(fetchPopular(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

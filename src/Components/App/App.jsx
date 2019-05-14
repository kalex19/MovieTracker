import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Controls from '../Controls/Controls';
import { fetchPopular } from '../../Thunks/fetchPopular';
import { fetchNowPlaying } from '../../Thunks/fetchNowPlaying';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import apiKey from '../../Util/ApiCalls/apiKey';
import Styles from './App.scss';
import PropTypes from 'prop-types';

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
		let display = this.props.isLoading ? (
			<section>Loading...</section>
		) : (
			<Controls signedIn={this.state.signedIn} favorites={this.state.favorites} />
		);

		return (
			<div className="App">
				<div className="title">
					<header>
						<h1 className="siteTitle">Movie Tracker</h1>
						<input type="text" className="searchInput" value="Search Movies...." />
					</header>
				</div>
				{display}
			</div>
		);
	}
}

const mapStateToProps = ({ popular, nowPlaying, isLoading }) => ({
	popular,
	nowPlaying,
	isLoading
});

const mapDispatchToProps = dispatch => ({
	fetchNowPlaying: url => dispatch(fetchNowPlaying(url)),
	fetchPopular: url => dispatch(fetchPopular(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
	signedIn: PropType.bool,
	userName: PropTypes.string,
	filteredBy: PropTypes.string,
	favorites: PropTypes.array,
	category: PropTypes.string
};

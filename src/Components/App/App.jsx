import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Controls from '../Controls/Controls';
import { fetchPop } from '../../Util/ApiCalls/fetchPopular';
import { fetchNowPlaying } from '../../Util/ApiCalls/fetchNowPlaying';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class App extends Component {
	constructor() {
		super();
		this.state = {
			signedIn: false,
			userName: '',
			filteredBy: '',
			favorites: [],
			category: '',
			isLoading: true
		};
	}

	componentDidMount() {
		this.getPopular();
		this.getNowPlaying();
	}

	getPopular = () => {
		fetchPop()
			.then(results => results.results)
			.then(popular => this.props.getPopular(popular))
			.then(this.setState({ isLoading: false }))
			.catch(error => console.log(error));
	};

	getNowPlaying = () => {
		fetchNowPlaying()
			.then(results => results.results)
			.then(nowPlaying => this.props.getNowPlaying(nowPlaying))
			.then(this.setState({ isLoading: false }))
			.catch(error => console.log(error));
	};

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
	getNowPlaying: nowPlaying => dispatch(actions.getNowPlaying(nowPlaying)),
	getPopular: popular => dispatch(actions.getPopular(popular))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

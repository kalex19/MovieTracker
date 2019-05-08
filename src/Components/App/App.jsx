import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Controls from '../Controls/Controls';
import {fetchPop} from '../../Util/ApiCalls/fetchPopular';
import {fetchNowPlaying} from '../../Util/ApiCalls/fetchNowPlaying'

class App extends Component {
	constructor() {
		super();
		this.state = {
			signedIn: false,
			userName: '',
			filteredBy: '',
			popular: [],
			nowPlaying: [],
			favorites: [],
			category: '',
			isLoading: false
		};
	}

	componentDidMount() {
		this.setState({ isLoading: true }, this.getPopular(), this.getNowPlaying());
	}

	getPopular = () => {
		fetchPop()
			.then(results => results.results)
			.then(popular => this.setState({ popular, isLoading: false }))
			.catch(error => console.log(error));
	}

	getNowPlaying = () => {
		fetchNowPlaying()
			.then(results => results.results)
			.then(nowPlaying => this.setState({nowPlaying, isLoading: false}))
			.catch(error => console.log(error))
	}


	render() {
		let display = this.state.isLoading ? (
			<section>Loading...</section>
		) : (
			<Controls
				dataNowPlaying={this.state.nowPlaying}
				signedIn={this.state.signedIn}
				favorites={this.state.favorites}
				dataPopular={this.state.popular}
			/>
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

export default App;

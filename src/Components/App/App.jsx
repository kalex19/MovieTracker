import React, { Component } from 'react';
// import { Route, NavLink } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import Controls from '../Controls/Controls';
import CardContainer from '../CardContainer/CardContainer';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			signedIn: false,
			userName: '',
			filteredBy: '',
			results: {
				popular: [],
				nowShowing: []
			},
			favorites: [],
			category: ''
		};
	}

	render() {
		return (
			<div>
				<h1>Movie Tracker</h1>
				<h3>Hello {this.state.userName}</h3>
				<input type="text" />
				<SignIn signedIn={this.state.signedIn} />
				<Controls category={this.state.category} />
				<CardContainer favorites={this.state.favorites} fetchResults={this.state.results[this.state.category]} />
			</div>
		);
	}
}

//proptypes

import React, { Component } from 'react';

export default class Card extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<article>
				<h3>{this.props.title}</h3>
				<img src={'http://image.tmdb.org/t/p/w200' + this.props.image} alt="movie poster" />
			</article>
		);
	}
}

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import postUser from '../../Util/ApiCalls/postUser';
import Card from '../Card/Card';

class SignIn extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = async e => {
		e.preventDefault();
		const url = 'http://localhost:3000/api/users/';
		const { email, password } = this.state;
		const body = { email, password };
		try {
			const postResponse = await postUser(url, body);
			await console.log(postResponse);
		} catch (error) {
			// create method that will handle error, add classes & error styling etc.
			console.log(error);
		}
	};

	render() {
		let display;
		const nowPlaying = this.props.nowPlaying.nowPlaying;

		if (this.props.category === 'nowPlaying' && nowPlaying !== undefined) {
			display = nowPlaying.map(movie => {
				return <Card id={movie.id} title={movie.title} image={movie.poster_path} />;
			});
		}
		return (
			<section>
				<div>
					<form onSubmit={this.handleSubmit}>
						<h3>LogIn</h3>
						<label htmlFor="email-existing">Email</label>
						<input type="email" name="email" placeholder="Email" id="email-existing" onChange={this.handleChange} />
						<label htmlFor="password-existing">Password</label>
						<input
							type="password"
							name="password"
							placeholder="Password"
							id="password-existing"
							onChange={this.handleChange}
						/>
						<input type="submit" />
					</form>
					<NavLink to="/createAccount">Create Account</NavLink>
					{display}
				</div>
			</section>
		);
	}
}

export default SignIn;

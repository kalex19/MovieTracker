import React, { Component } from 'react';
import postUser from '../../Util/ApiCalls/postUser';
import {urlAddNewUser} from '../../Util/ApiCalls/urls';
import {Redirect} from 'react-router'
import { connect } from 'react-redux';
import Home from '../Home/Home'
import Styles from './CreateAccount.scss';
import PropTypes from 'prop-types';
import {toggleLogIn} from '../../actions'


class CreateAccount extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			name: '',
			errored: false,
		};
	}

	displayError = () => {
		this.setState({errored:true})
	}

	backHome = () => {
		this.props.toggleLogIn(true)
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = async e => {
		e.preventDefault();
		const { email, password, name } = this.state;
		const body = { email, password, name };
		try {
			const postResponse = await postUser(urlAddNewUser, body);
			await this.backHome()
		} catch (error) {
			this.displayError()
		}
	}

	render() {
		let displayError; 

		displayError = this.state.errored ? 
		<div className="error-message">
			<p>Email already exists, please use a different email</p>
		</div>
		: null

		if(this.props.isLoggedIn){
			 return <Redirect path='/'/>

		}
		

		return (
			<section className="createAccount">
				<form onSubmit={this.handleSubmit} className="createAccountSubmit">
					<h3>Create Account</h3>
					{displayError}
					<label htmlFor="name">Name</label>
					<input
						type="text"
						placeholder="Name"
						name="name"
						id="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
					<label htmlFor="email-new">Email</label>
					<input
						type="email"
						name="email"
						placeholder="Email"
						id="email-new"
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<label htmlFor="password-new">Password</label>
					<input
						type="password"
						name="password"
						placeholder="Password"
						id="password-new"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<label htmlFor="password-confirm">Confirm Password</label>
					<input type="password" name="password" placeholder="Password" id="password-confirm" />
					<input type="submit" className="createAccountBtn" />
				</form>
			</section>
		);
	}
}

const mapStateToProps = ({isLoggedIn}) => ({
	isLoggedIn
})

const mapDispatchToProps = dispatch => ({
	toggleLogIn: bool => dispatch(toggleLogIn(bool))

})


export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);

CreateAccount.propTypes = {
	handleChange: PropTypes.func,
	password: PropTypes.string,
	email: PropTypes.string,
	name: PropTypes.string,
	title: PropTypes.string,
	handleSubmit: PropTypes.func
};

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import postUser from '../../Util/ApiCalls/postUser';
import {urlCheckUser} from '../../Util/ApiCalls/urls'
import {Redirect} from 'react-router'
import { connect } from 'react-redux';
import Card from '../Card/Card';
import Styles from './SignIn.scss';
import PropTypes from 'prop-types';
import {toggleLogIn} from '../../actions'


class SignIn extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			errored: false,
			isLoggedIn: false
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	displayError = () => {
		this.setState({errored:true})
	}

	backHome = () => {
		this.props.toggleLogIn(true)
		this.setState({isLoggedIn:true})
	}

	handleSubmit = async e => {
		e.preventDefault();
		const { email, password } = this.state;
		const body = { email, password };
		try {
			const postResponse = await postUser(urlCheckUser, body);
			await this.backHome()
		} catch (error) {
			console.log(error);
			this.displayError();
		}
	};

	render() {
		let displayError; 

		displayError = this.state.errored ? 
		<div className="error-message">
			<p>Email or Password is incorrect</p>
		</div>
		: null

		if(this.state.isLoggedIn){
			return <Redirect path='/'/>

	 }

		return (
			<section className="signIn-background">
				<div className="signIn">
					<form onSubmit={this.handleSubmit} className="signInSubmit">
						<h3>LogIn</h3>
						{displayError}
						<label htmlFor="email-existing">Email</label>
						<input type="email" name="email" placeholder="Email" id="email-existing" className="email" onChange={this.handleChange} />
						<label htmlFor="password-existing">Password</label>
						<input
							type="password"
							name="password"
							placeholder="Password"
							id="password-existing"
							onChange={this.handleChange}
						/>
						<input type="submit" className="submitAccountBtn" />
						<NavLink to="/createAccount" className="createAccountLink">
						Create Account
					</NavLink>
					</form>
				</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

SignIn.propTypes = {
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func,
	email: PropTypes.string,
	password: PropTypes.string
};

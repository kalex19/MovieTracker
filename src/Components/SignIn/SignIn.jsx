import React, {Component} from 'react';
import {Route, NavLink } from 'react-router-dom';



class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: ''

    }
  }

  render() {
    return (
      <section>
        <div>
          <form>
            <h3>LogIn</h3>
              <label htmlFor="email-existing">Email</label>
                <input type="email" name="email" placeholder="Email" id="email-existing"/>
              <label htmlFor="password-existing">Password</label>
                <input type="password" name="password" placeholder="Password" id="password-existing"/>
              <input type="submit" />
          </form>
        <NavLink  to="/createAccount">Create Account</NavLink>
        </div>
      </section>
    );
    
  }
}

export default SignIn;

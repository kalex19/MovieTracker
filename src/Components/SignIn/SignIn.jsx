import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';



class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''

    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name)
    
  }



  render() {
    return (
      <section>
        <div>
          <form>
            <h3>LogIn</h3>
              <label htmlFor="email-existing">Email</label>
                <input type="email" name="email" placeholder="Email" id="email-existing" onChange={this.handleChange}/>
              <label htmlFor="password-existing">Password</label>
                <input type="password" name="password" placeholder="Password" id="password-existing" onChange={this.handleChange}/>
              <input type="submit" />
          </form>
        <NavLink  to="/createAccount">Create Account</NavLink>
        </div>
      </section>
    );
    
  }
}

export default SignIn;

import React, {Component} from 'react';
import postUser from '../../Util/ApiCalls/postUser'

class CreateAccount extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      name:''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  } 

  handleSubmit = (e) => {
    const url = "http://localhost:3000/api/users/new"
    const {email, password, name} = this.state
    const body = {email, password, name}
    e.preventDefault();
    console.log(this.state.name)
    postUser(url, body)
  }

  render() {
    return(
        <section>
           <form onSubmit={this.handleSubmit}>
            <h3>Create Account</h3>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name" name="name" id="name" value={this.state.name} onChange={this.handleChange}/>
            <label htmlFor="email-new">Email</label>
              <input type="email" name="email" placeholder="Email" id="email-new" value={this.state.email} onChange={this.handleChange}/>
            <label htmlFor="password-new">Password</label>
              <input type="password" name="password" placeholder="Password" id="password-new" value={this.state.password} onChange={this.handleChange}/>
              <label htmlFor="password-confirm">Confirm Password</label>
              <input type="password" name="password" placeholder="Password" id="password-confirm"/>
            <input type="submit" />
          </form>
        </section>
    )

  }

}

export default CreateAccount
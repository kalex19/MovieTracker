import React, {Component} from 'react';

class CreateAccount extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      password: ''
    }
  }

  render() {
    return(
        <section>
           <form>
            <h3>LogIn</h3>
              <label htmlFor="email-new">Email</label>
                <input type="email" name="email" placeholder="Email" id="email-new"/>
              <label htmlFor="password-new">Password</label>
                <input type="password" name="password" placeholder="Password" id="password-new"/>
              <input type="submit" />
          </form>
        </section>
    )

  }

}

export default CreateAccount
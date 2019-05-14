import React from 'react'
import {Redirect} from 'react-router'
import { connect } from 'react-redux'; 
import {toggleLogIn} from '../../actions'

const SignOut = (props) => {
  props.toggleLogIn(false)
  return(
    <Redirect path="/"/>
  )
}

const mapStateToProps = ({isLoggedIn}) => ({
	isLoggedIn
})

const mapDispatchToProps = dispatch => ({
	toggleLogIn: bool => dispatch(toggleLogIn(bool))

})

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
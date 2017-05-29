import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from 'core/auth/actions'

const SignInContainer = ({ signInWithGithub }) => (
  <h1>Sign In! <button type='button' onClick={signInWithGithub}>Github</button></h1>
)

SignInContainer.propTypes = {
  signInWithGithub: PropTypes.func.isRequired
}

export default connect(
  null,
  actions
)(SignInContainer)

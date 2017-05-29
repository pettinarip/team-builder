import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from 'core/auth/actions'

const SignInContainer = ({ signInWithGithub, signInWithGoogle }) => (
  <div>
    <h1>Sign In!</h1>
    <div>
      <button type='button' onClick={signInWithGithub}>Github</button>
    </div>
    <div>
      <button type='button' onClick={signInWithGoogle}>Google</button>
    </div>
  </div>
)

SignInContainer.propTypes = {
  signInWithGithub: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired
}

export default connect(
  null,
  actions
)(SignInContainer)

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from 'core/auth/actions'

const SignIn = ({ signInWithGithub, signInWithGoogle }) => (
  <section className='content'>
    <div>
      <button type='button' onClick={signInWithGithub}>Github</button>
    </div>
    <div>
      <button type='button' onClick={signInWithGoogle}>Google</button>
    </div>
  </section>
)

SignIn.propTypes = {
  signInWithGithub: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired
}

export default connect(
  null,
  actions
)(SignIn)

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { authActions } from 'core/auth'

const SignIn = ({ signInWithGithub, signInWithGoogle }) => (
  <section className='sign-in container'>
    <h1 className='sign-in__heading'>Sign in</h1>
    <div className='sign-in__button-wrapper'>
      <button type='button' className='sign-in__button' onClick={signInWithGithub}>Github</button>
    </div>
    <div className='sign-in__button-wrapper'>
      <button type='button' className='sign-in__button' onClick={signInWithGoogle}>Google</button>
    </div>
  </section>
)

SignIn.propTypes = {
  signInWithGithub: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired
}

export default connect(
  null,
  authActions
)(SignIn)

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { authActions } from 'core/auth'

const SignIn = ({ signInWithGithub, signInWithGoogle }) => (
  <section className='sign-in container'>
    <h1 className='sign-in__heading'>Sign in</h1>
    <div className='sign-in__button-wrapper'>
      <a href='#' className='sign-in__button button' onClick={signInWithGithub}>Github</a>
    </div>
    <div className='sign-in__button-wrapper'>
      <a href='#' className='sign-in__button button' onClick={signInWithGoogle}>Google</a>
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

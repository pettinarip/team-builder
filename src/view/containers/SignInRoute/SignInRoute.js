import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { isAuthenticated } from 'core/auth'

import SignIn from 'view/pages/SignIn'

const SignInRoute = ({ store, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated(store.getState()) ? (
      <Redirect to={{
        pathname: '/'
      }} />
    ) : (
      <SignIn {...props} />
    )
  )} />
)

SignInRoute.propTypes = {
  store: PropTypes.object.isRequired
}

export default SignInRoute

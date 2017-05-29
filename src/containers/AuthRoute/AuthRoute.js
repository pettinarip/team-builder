import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { isAuthenticated } from 'core/auth'

import App from 'containers/App'

const AuthRoute = ({ store, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated(store.getState()) ? (
      <App {...props} />
    ) : (
      <Redirect to={{
        pathname: '/sign-in',
        state: { from: props.location }
      }} />
    )
  )} />
)

AuthRoute.propTypes = {
  store: PropTypes.object.isRequired,
  location: PropTypes.string
}

export default AuthRoute

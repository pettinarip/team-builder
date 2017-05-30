import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { isAuthenticated } from 'core/auth'

import Builder from 'view/pages/Builder'

const AuthRoute = ({ store, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated(store.getState()) ? (
      <Builder {...props} />
    ) : (
      <Redirect to={{
        pathname: '/sign-in'
      }} />
    )
  )} />
)

AuthRoute.propTypes = {
  store: PropTypes.object.isRequired,
  location: PropTypes.string
}

export default AuthRoute

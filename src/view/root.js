import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import history from './history'
import AuthRoute from 'containers/AuthRoute'

import SignIn from 'view/containers/SignInContainer'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <AuthRoute exact path='/' store={store} />
        <Route path='/sign-in' component={SignIn} />
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object
}

export default Root

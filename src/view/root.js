import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import history from './history'
import AuthRoute from './containers/AuthRoute'

import App from './app'
import SignIn from './pages/SignIn'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route children={() => (
        <App>
          <div>
            <AuthRoute exact path='/' store={store} />
            <Route path='/sign-in' component={SignIn} />
          </div>
        </App>
      )} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object
}

export default Root

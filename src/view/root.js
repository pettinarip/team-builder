import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import history from './history'

import App from './app'
import AuthRoute from './containers/AuthRoute'
import SignInRoute from './containers/SignInRoute'
import ViewMode from './pages/ViewMode'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route children={() => (
        <App>
          <main>
            <AuthRoute exact path='/' store={store} />
            <SignInRoute path='/sign-in' store={store} />
            <Route path='/view/:shareCode' component={ViewMode} />
          </main>
        </App>
      )} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object
}

export default Root

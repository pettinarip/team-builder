import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import App from './containers/App'
import rootReducer from './reducers'
import { getAllLayouts } from './actions'

import './styles/app.scss'

const isProduction = process.env.NODE_ENV === 'production'

let store = null
if (isProduction) {
  const middleware = applyMiddleware(thunk)

  store = createStore(
    rootReducer,
    middleware
  )
} else {
  const middleware = applyMiddleware(thunk)
  let enhancer

  // Enable DevTools if browser extension is installed
  if (window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
    enhancer = compose(
      middleware,
      window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
    )
  } else {
    enhancer = compose(middleware)
  }

  store = createStore(
    rootReducer,
    enhancer
  )
}

store.dispatch(getAllLayouts())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

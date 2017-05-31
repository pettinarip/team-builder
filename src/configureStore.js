import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducers from 'core/reducers'
import sagas from 'core/sagas'

const isProduction = process.env.NODE_ENV === 'production'

const configureStore = () => {
  let store = null

  const sagaMiddleware = createSagaMiddleware()
  const middleware = applyMiddleware(
    thunk,
    sagaMiddleware
  )

  if (isProduction) {
    store = createStore(
      reducers,
      middleware
    )
  } else {
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
      reducers,
      enhancer
    )
  }
  sagaMiddleware.run(sagas)

  return store
}

export default configureStore

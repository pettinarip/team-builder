import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const isProduction = process.env.NODE_ENV === 'production'

const configureStore = () => {
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

  return store
}

export default configureStore

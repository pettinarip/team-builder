import React from 'react'
import { render } from 'react-dom'
import Root from './view/root'
import configureStore from './configureStore'
import { initAuth } from 'core/auth'

import './styles/app.scss'

const store = configureStore()

const renderApp = Root => {
  render(
    <Root store={store} />,
    document.getElementById('root')
  )
}

initAuth(store.dispatch)
  .then(() => renderApp(Root))
  .catch(error => console.log(error))

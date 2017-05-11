import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './configureStore'
import { getAllLayouts } from './actions'

import './styles/app.scss'

const store = configureStore()
store.dispatch(getAllLayouts())

render(
  <Root store={store} />,
  document.getElementById('root')
)

import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './configureStore'

import './styles/app.scss'

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)

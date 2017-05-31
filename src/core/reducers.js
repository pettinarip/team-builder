import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { authReducer } from './auth'
import { playersReducer } from './players'
import { layoutsReducer } from './layouts'
import { positionsReducer } from './positions'
import { modalsReducer } from './modals'

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  players: playersReducer,
  layouts: layoutsReducer,
  positions: positionsReducer,
  modals: modalsReducer
})

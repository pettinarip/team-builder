import { combineReducers } from 'redux'
import players from './players'
import layouts, * as fromLayouts from './layouts'

export default combineReducers({
  players,
  layouts
})

export const getActiveLayout = state =>
  fromLayouts.getActiveLayout(state.layouts)

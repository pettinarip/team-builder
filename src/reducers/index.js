import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import players, * as fromPlayers from './players'
import layouts, * as fromLayouts from './layouts'
import positions from './positions'
import modals from './modals'

export default combineReducers({
  form: formReducer,
  players,
  layouts,
  positions,
  modals
})

export const getAllPlayers = state =>
  fromPlayers.getAllPlayers(state.players)

export const getActivePlayers = state =>
  fromPlayers.getActivePlayers(state.players)

export const getInactivePlayers = state =>
  fromPlayers.getInactivePlayers(state.players)

export const getAllLayouts = state =>
  fromLayouts.getAllLayouts(state.layouts)

export const getActiveLayout = state =>
  fromLayouts.getActiveLayout(state.layouts)

export const getPositions = state => {
  return Object.keys(state.positions).reduce((result, position) => {
    if (!position) return result
    return {
      ...result,
      [position]: fromPlayers.getPlayer(state.players, state.positions[position])
    }
  }, {})
}

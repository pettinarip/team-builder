import { combineReducers } from 'redux'
import players, * as fromPlayers from './players'
import layouts, * as fromLayouts from './layouts'
import positions from './positions'

export default combineReducers({
  players,
  layouts,
  positions
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

export const getPlayersByPositions = state =>
  state.positions.ids.reduce((positions, id) => {
    return {
      ...positions,
      [state.positions.byId[id]]: state.players.byId[id]
    }
  }, {})

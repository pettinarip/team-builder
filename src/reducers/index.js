import { combineReducers } from 'redux'
import players from './players'
import layouts, * as fromLayouts from './layouts'
import positions from './positions'

export default combineReducers({
  players,
  layouts,
  positions
})

export const getActiveLayout = state =>
  fromLayouts.getActiveLayout(state.layouts)

export const getLayoutPlayers = state =>
  state.positions.ids.map(id => state.players.byId[id])

export const getPlayersByPositions = state =>
  state.positions.ids.reduce((positions, id) => {
    return {
      ...positions,
      [state.positions.byId[id]]: state.players.byId[id]
    }
  }, {})

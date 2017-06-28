import { createSelector } from 'reselect'
import * as positions from './positions'
import * as players from './players'
import * as layouts from './layouts'
import * as auth from './auth'

export const getLayoutsList = state => layouts.getLayoutsList(state.layouts)

export const getActiveLayout = state => layouts.getActiveLayout(state.layouts)

export const getInactivePlayers = state => players.getInactivePlayers(state.players)

export const getPlayersByPosition = createSelector(
  state => positions.getPositions(state.positions),
  state => players.getPlayersById(state.players),
  (positions, players) => {
    return Object.keys(positions).reduce((result, position) => {
      if (!position) return result
      return {
        ...result,
        [position]: players[positions[position]]
      }
    }, {})
  }
)

export const getAuthUser = state => auth.getUser(state.auth)

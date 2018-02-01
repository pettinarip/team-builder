import { createSelector } from 'reselect'
import * as positions from './positions'
import * as players from './players'
import * as layouts from './layouts'
import * as auth from './auth'
import * as shareCode from './shareCode'

export const getSelectedLayoutId = state => layouts.getSelectedId(state.layouts)

export const getLayoutsList = state => layouts.getLayoutsList(state.layouts)

export const getActiveLayout = state => layouts.getActiveLayout(state.layouts)

export const getPositions = state => positions.getPositions(state.positions)

export const getUser = state => auth.getUser(state.auth)

export const getInactivePlayers = createSelector(
  state => positions.getPositions(state.positions),
  state => players.getPlayersList(state.players),
  (positions, players) => {
    const actives = Object.values(positions)
    return players.reduce((inactives, player) => {
      return !actives.includes(player.id)
        ? [...inactives, player]
        : inactives
    }, [])
  }
)

export const getPlayersByPosition = createSelector(
  state => positions.getPositions(state.positions),
  state => players.getPlayersById(state.players),
  (positions, players) => {
    return Object.keys(positions).reduce((result, position) => {
      if (!positions[position]) return result
      return {
        ...result,
        [position]: { ...players[positions[position]], id: positions[position] }
      }
    }, {})
  }
)

export const getUserName = createSelector(
  state => auth.getUser(state.auth),
  user => {
    return user ? user.displayName : undefined
  }
)

export const getShareCode = state => shareCode.getShareCode(state.shareCode)

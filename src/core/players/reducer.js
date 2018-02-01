import { combineReducers } from 'redux'
import { playersTypes } from './actionTypes'
import { positionsTypes } from 'core/positions'
import { shareCodeTypes } from 'core/shareCode'

const byId = (state = {}, action) => {
  switch (action.type) {
    case playersTypes.ADD_PLAYER_SUCCESS:
      return {
        ...state,
        [action.player.id]: action.player
      }
    case playersTypes.LOAD_PLAYERS_SUCCESS:
      return action.players.reduce((list, player) => {
        return {
          ...list,
          [player.id]: player
        }
      }, {})
    case shareCodeTypes.LOAD_SHARE_CODE_SUCCESS:
      return action.payload.players
    default:
      return state
  }
}

const ids = (state = [], action) => {
  switch (action.type) {
    case playersTypes.ADD_PLAYER_SUCCESS:
      return [...state, action.player.id]
    case playersTypes.LOAD_PLAYERS_SUCCESS:
      return action.players.map(player => player.id)
    case shareCodeTypes.LOAD_SHARE_CODE_SUCCESS:
      return Object.keys(action.payload.players)
    default:
      return state
  }
}

export const playersReducer = combineReducers({
  byId,
  ids
})

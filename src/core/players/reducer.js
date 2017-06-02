import { combineReducers } from 'redux'
import { playersTypes } from './actionTypes'
import { positionsTypes } from 'core/positions'

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
    case positionsTypes.ADD_PLAYER_POSITION:
      return {
        ...state,
        [action.id]: { ...state[action.id], active: true }
      }
    case positionsTypes.REMOVE_PLAYER_POSITION:
      return {
        ...state,
        [action.id]: { ...state[action.id], active: false }
      }
    case positionsTypes.RESET_POSITIONS:
      return Object.entries(state).reduce((result, [id, player]) => {
        return {
          ...result,
          [id]: { ...player, active: false }
        }
      }, {})
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
    default:
      return state
  }
}

export const playersReducer = combineReducers({
  byId,
  ids
})

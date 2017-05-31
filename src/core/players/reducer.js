import { combineReducers } from 'redux'
import {
  ADD_PLAYER_SUCCESS, ADD_PLAYER_POSITION, REMOVE_PLAYER_POSITION, RESET_POSITIONS
} from '../constants/actionTypes'

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_PLAYER_SUCCESS:
      return {
        ...state,
        [action.response.id]: action.response
      }
    case ADD_PLAYER_POSITION:
      return {
        ...state,
        [action.id]: { ...state[action.id], active: true }
      }
    case REMOVE_PLAYER_POSITION:
      return {
        ...state,
        [action.id]: { ...state[action.id], active: false }
      }
    case RESET_POSITIONS:
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
    case ADD_PLAYER_SUCCESS:
      return [...state, action.response.id]
    default:
      return state
  }
}

export default combineReducers({
  byId,
  ids
})

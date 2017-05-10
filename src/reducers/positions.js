import { combineReducers } from 'redux'
import {
  RESET_POSITIONS, ADD_PLAYER_POSITION, REMOVE_PLAYER_POSITION
} from '../constants/ActionTypes'

const byId = (state = {}, action) => {
  switch (action.type) {
    case RESET_POSITIONS:
      return {}
    case ADD_PLAYER_POSITION:
      return {
        ...state,
        [action.id]: action.position
      }
    default:
      return state
  }
}

const ids = (state = [], action) => {
  let index
  switch (action.type) {
    case ADD_PLAYER_POSITION:
      index = state.indexOf(action.id)
      return index > -1 ? state : state.concat(action.id)
    case REMOVE_PLAYER_POSITION:
      index = state.indexOf(action.id)
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
    default:
      return state
  }
}

export default combineReducers({
  byId,
  ids
})

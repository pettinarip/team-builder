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
  switch (action.type) {
    case ADD_PLAYER_POSITION:
      return state.indexOf(action.id) > -1 ? state : state.concat(action.id)
    case REMOVE_PLAYER_POSITION:
      return state.filter(id => id !== action.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  ids
})

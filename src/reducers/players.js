import { combineReducers } from 'redux'
import { ADD_PLAYER_SUCCESS } from '../constants/ActionTypes'

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_PLAYER_SUCCESS:
      return {
        ...state,
        [action.response.id]: action.response
      }
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

export const getPlayer = (state, id) =>
  state.byId[id]

export const getAllPlayers = state =>
  state.ids.map(id => getPlayer(state, id))

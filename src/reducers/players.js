import { combineReducers } from 'redux'
import { ADD_PLAYER } from '../constants/ActionTypes'

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.name,
          icon: action.icon,
          number: action.number,
          color: action.color
        }
      }
    default:
      return state
  }
}

const ids = (state = [], action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return [...state, action.id]
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

export const getPlayers = state =>
  state.ids.map(id => getPlayer(state, id))

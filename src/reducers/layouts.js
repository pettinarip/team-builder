import { combineReducers } from 'redux'
import { RECEIVE_LAYOUTS, SELECT_LAYOUT } from '../constants/ActionTypes'

const selectedId = (state = -1, action) => {
  switch (action.type) {
    case SELECT_LAYOUT:
      return action.id
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LAYOUTS:
      return {
        ...state,
        ...action.layouts.reduce((obj, layout) => {
          obj[layout.id] = layout
          return obj
        }, {})
      }
    default:
      return state
  }
}

const ids = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_LAYOUTS:
      return action.layouts.map(layout => layout.id)
    default:
      return state
  }
}

export default combineReducers({
  selectedId,
  byId,
  ids
})

export const getLayout = (state, id) =>
  state.byId[id]

export const getLayouts = state =>
  state.ids.map(id => getLayout(state, id))

export const getActiveLayout = state =>
  state.byId[state.selectedId]

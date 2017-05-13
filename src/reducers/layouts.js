import { combineReducers } from 'redux'
import { FETCH_LAYOUTS_SUCCESS, SELECT_LAYOUT } from '../constants/ActionTypes'

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
    case FETCH_LAYOUTS_SUCCESS:
      return {
        ...state,
        ...action.response.reduce((obj, layout) => {
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
    case FETCH_LAYOUTS_SUCCESS:
      return action.response.map(layout => layout.id)
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

export const getAllLayouts = state =>
  state.ids.map(id => getLayout(state, id))

export const getActiveLayout = state =>
  state.byId[state.selectedId]

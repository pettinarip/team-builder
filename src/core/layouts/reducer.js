import { combineReducers } from 'redux'
import { layoutsTypes } from './actionTypes'

const selectedId = (state = -1, action) => {
  switch (action.type) {
    case layoutsTypes.SELECT_LAYOUT:
      return action.id
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case layoutsTypes.LOAD_LAYOUTS_SUCCESS:
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
    case layoutsTypes.LOAD_LAYOUTS_SUCCESS:
      return action.layouts.map(layout => layout.id)
    default:
      return state
  }
}

export const layoutsReducer = combineReducers({
  selectedId,
  byId,
  ids
})

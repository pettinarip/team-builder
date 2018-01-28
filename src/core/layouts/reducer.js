import { combineReducers } from 'redux'
import { layoutsTypes } from './actionTypes'
import { shareCodeTypes } from 'core/shareCode'
import { positionsTypes } from '../positions/actionTypes'

const selectedId = (state = -1, action) => {
  switch (action.type) {
    case layoutsTypes.SELECT_LAYOUT:
      return action.id
    case shareCodeTypes.LOAD_SHARE_CODE_SUCCESS:
      return action.payload.layout
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
    case positionsTypes.UPDATE_POSITION:
      return {
        ...state,
        [action.layoutId]: {
          ...state[action.layoutId],
          config: Object.assign(
            [],
            state[action.layoutId].config,
            {
              [action.position]: { x: action.x, y: action.y }
            }
          )
        }
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

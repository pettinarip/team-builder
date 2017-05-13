import * as api from '../api'
import * as types from '../constants/ActionTypes'
import { createAsyncAction } from './helper'

export const fetchLayouts = createAsyncAction('FETCH_LAYOUTS', api.fetchLayouts)

export const addPlayer = createAsyncAction('ADD_PLAYER', api.addPlayer)

export const changeLayoutSelection = id => (dispatch, getState) => {
  const layouts = getState().layouts
  if (layouts.selectedId !== id) {
    dispatch({
      type: types.RESET_POSITIONS,
      playersCount: layouts.byId[id].config.reduce((acum, x) => acum + x, 0)
    })
    dispatch({
      type: types.SELECT_LAYOUT,
      id
    })
  }
}

export const removePlayerPosition = (id, position) => ({
  type: types.REMOVE_PLAYER_POSITION,
  id,
  position
})

export const addPlayerPosition = (id, position, prevId) => dispatch => {
  if (prevId) {
    dispatch(removePlayerPosition(prevId, position))
  }
  dispatch({
    type: types.ADD_PLAYER_POSITION,
    id,
    position
  })
}

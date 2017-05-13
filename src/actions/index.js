import * as api from '../api'
import * as types from '../constants/ActionTypes'
import { createAsyncAction } from './helper'

export const fetchLayouts = createAsyncAction('FETCH_LAYOUTS', api.fetchLayouts)

export const addPlayer = createAsyncAction('ADD_PLAYER', api.addPlayer)

export const changeLayoutSelection = id => (dispatch, getState) => {
  if (getState().layouts.selectedId !== id) {
    dispatch({
      type: types.RESET_POSITIONS
    })
    dispatch({
      type: types.SELECT_LAYOUT,
      id
    })
  }
}

export const addPlayerPosition = (id, position, prevId) => dispatch => {
  if (prevId) {
    dispatch({
      type: types.REMOVE_PLAYER_POSITION,
      id
    })
  }
  dispatch({
    type: types.ADD_PLAYER_POSITION,
    id,
    position
  })
}

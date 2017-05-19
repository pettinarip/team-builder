import * as api from '../api'
import * as types from '../constants/ActionTypes'
import { createAsyncAction } from './helper'

export const fetchLayouts = createAsyncAction('FETCH_LAYOUTS', api.fetchLayouts)

export const addPlayer = createAsyncAction('ADD_PLAYER', api.addPlayer)

export const showAddPlayerModal = modalType => ({
  type: types.SHOW_MODAL,
  modalType: 'NEW_PLAYER',
  modalProps: {}
})

export const hideModal = () => ({
  type: types.HIDE_MODAL
})

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

export const cleanPlayerPosition = position => ({
  type: types.CLEAN_PLAYER_POSITION,
  position
})

export const addPlayerPosition = (source, target) => dispatch => {
  if (target.id && target.position) {
    dispatch(removePlayerPosition(target.id, target.position))
  }
  if (source.position) {
    dispatch(cleanPlayerPosition(source.position))
  }
  dispatch({
    type: types.ADD_PLAYER_POSITION,
    id: source.id,
    position: target.position
  })
}

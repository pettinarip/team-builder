import api from '../api/layout'
import v4 from 'uuid/v4'
import * as types from '../constants/ActionTypes'

export const fetchLayouts = () => dispatch => {
  api.get(layouts => {
    dispatch({
      type: types.RECEIVE_LAYOUTS,
      layouts
    })
  })
}

export const addPlayer = () => dispatch => {
  const number = Math.floor(Math.random() * 100) + 1
  dispatch({
    type: types.ADD_PLAYER,
    id: v4(),
    name: 'Player',
    icon: '',
    number: number
  })
}

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

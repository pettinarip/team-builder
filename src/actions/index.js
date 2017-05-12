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

const resetPlayersPosition = positionsNbr => ({
  type: types.RESET_POSITIONS,
  positionsNbr
})

const selectLayout = id => ({
  type: types.SELECT_LAYOUT,
  id
})

export const changeLayoutSelection = id => (dispatch, getState) => {
  if (getState().layouts.selectedId !== id) {
    const selectedLayout = getState().layouts.byId[id]
    dispatch(resetPlayersPosition(selectedLayout.config.reduce((acum, count) => acum + count, 0)))
    dispatch(selectLayout(id))
  }
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

const addPlayerToField = (id, position) => ({
  type: types.ADD_PLAYER_POSITION,
  id,
  position
})

const removePlayerInField = id => ({
  type: types.REMOVE_PLAYER_POSITION,
  id
})

export const addPlayerPosition = (id, position, prevId) => dispatch => {
  if (prevId) {
    dispatch(removePlayerInField(prevId))
  }
  dispatch(addPlayerToField(id, position))
}

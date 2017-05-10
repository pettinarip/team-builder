import api from '../api/layout'
import * as types from '../constants/ActionTypes'

const receiveLayouts = layouts => ({
  type: types.RECEIVE_LAYOUTS,
  layouts
})

export const getAllLayouts = () => dispatch => {
  api.get(layouts => {
    dispatch(receiveLayouts(layouts))
  })
}

const selectLayout = id => ({
  type: types.SELECT_LAYOUT,
  id
})

export const changeLayoutSelection = id => (dispatch, getState) => {
  dispatch(selectLayout(id))
}

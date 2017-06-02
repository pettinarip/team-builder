import { createAsyncAction } from './helper'
import * as api from '../api'
import * as types from 'core/constants/actionTypes'
import { positionsTypes } from 'core/positions'

export const fetchLayouts = createAsyncAction('FETCH_LAYOUTS', api.fetchLayouts)

export const changeLayoutSelection = id => (dispatch, getState) => {
  const layouts = getState().layouts
  if (layouts.selectedId !== id) {
    dispatch({
      type: positionsTypes.RESET_POSITIONS,
      playersCount: layouts.byId[id].config.reduce((acum, x) => acum + x, 0)
    })
    dispatch({
      type: types.SELECT_LAYOUT,
      id
    })
  }
}

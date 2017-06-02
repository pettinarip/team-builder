import * as api from 'api'
import { positionsTypes } from 'core/positions'
import { layoutsTypes } from './actionTypes'

export const layoutsActions = {
  fetchLayouts: () => dispatch => {
    dispatch({
      type: layoutsTypes.FETCH_LAYOUTS_REQUEST
    })

    return api.fetchLayouts().then(
      response => {
        dispatch({
          type: layoutsTypes.FETCH_LAYOUTS_SUCCESS,
          response
        })
      },
      error => {
        dispatch({
          type: layoutsTypes.FETCH_LAYOUTS_FAILURE,
          errorMessage: error.message || 'Something went wrong.'
        })
      }
    )
  },

  changeLayoutSelection: id => (dispatch, getState) => {
    const layouts = getState().layouts
    if (layouts.selectedId !== id) {
      dispatch({
        type: positionsTypes.RESET_POSITIONS,
        playersCount: layouts.byId[id].config.reduce((acum, x) => acum + x, 0)
      })
      dispatch({
        type: layoutsTypes.SELECT_LAYOUT,
        id
      })
    }
  }

}

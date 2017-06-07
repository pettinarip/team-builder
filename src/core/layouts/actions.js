import { positionsTypes } from 'core/positions'
import { layoutsTypes } from './actionTypes'

export const layoutsActions = {
  loadLayoutsSuccess: layouts => ({
    type: layoutsTypes.LOAD_LAYOUTS_SUCCESS,
    layouts
  }),

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

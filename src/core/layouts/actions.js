import { positionsTypes } from 'core/positions'
import { layoutsTypes } from './actionTypes'

export const layoutsActions = {
  loadLayoutsSuccess: layouts => ({
    type: layoutsTypes.LOAD_LAYOUTS_SUCCESS,
    layouts
  }),

  changeLayoutSelection: id => ({
    type: layoutsTypes.SELECT_LAYOUT,
    id
  })
}

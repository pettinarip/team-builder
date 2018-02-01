import { positionsTypes } from './actionTypes'
import { getSelectedLayoutId } from 'core/selectors'

export const positionsActions = {
  cleanPlayerPosition: position => ({
    type: positionsTypes.CLEAN_PLAYER_POSITION,
    position
  }),

  addPlayerPosition: (source, target) => ({
    type: positionsTypes.ADD_PLAYER_POSITION,
    id: source.id,
    position: target.position
  }),

  updatePosition: (position, x, y) => (dispatch, getState) => {
    const state = getState()
    const layoutId = getSelectedLayoutId(state)

    dispatch({
      type: positionsTypes.UPDATE_POSITION,
      layoutId,
      position,
      x,
      y
    })
  },

  switchPosition: (source, target) => ({
    type: positionsTypes.SWITCH_POSITION,
    source,
    target
  })
}

import { positionsTypes } from './actionTypes'
import { getSelectedLayoutId } from 'core/selectors'

export const positionsActions = {
  removePlayerPosition: (id, position) => ({
    type: positionsTypes.REMOVE_PLAYER_POSITION,
    id,
    position
  }),

  cleanPlayerPosition: position => ({
    type: positionsTypes.CLEAN_PLAYER_POSITION,
    position
  }),

  addPlayerPosition: (source, target) => dispatch => {
    if (target.id && target.position) {
      dispatch(positionsActions.removePlayerPosition(target.id, target.position))
    }
    if (source.position) {
      dispatch(positionsActions.cleanPlayerPosition(source.position))
    }
    dispatch({
      type: positionsTypes.ADD_PLAYER_POSITION,
      id: source.id,
      position: target.position
    })
  },

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
  }
}

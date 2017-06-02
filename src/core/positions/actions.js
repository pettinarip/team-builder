import { positionsTypes } from './actionTypes'

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
  }
}

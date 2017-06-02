import { positionsTypes } from './actionTypes'

export const positionsReducer = (state = {}, action) => {
  switch (action.type) {
    case positionsTypes.RESET_POSITIONS:
      return {}
    case positionsTypes.ADD_PLAYER_POSITION:
      return {
        ...state,
        [action.position]: action.id
      }
    case positionsTypes.REMOVE_PLAYER_POSITION:
    case positionsTypes.CLEAN_PLAYER_POSITION:
      return {
        ...state,
        [action.position]: null
      }
    default:
      return state
  }
}

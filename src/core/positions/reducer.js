import { positionsTypes } from './actionTypes'
import { shareCodeTypes } from 'core/shareCode'

export const positionsReducer = (state = {}, action) => {
  switch (action.type) {
    case positionsTypes.RESET_POSITIONS:
      return {}
    case positionsTypes.ADD_PLAYER_POSITION:
      return {
        ...state,
        [action.position]: action.id
      }
    case positionsTypes.SWITCH_POSITION:
      return {
        ...state,
        [action.target]: state[action.source],
        [action.source]: state[action.target],
      }
    case positionsTypes.CLEAN_PLAYER_POSITION:
      return {
        ...state,
        [action.position]: undefined
      }
    case shareCodeTypes.LOAD_SHARE_CODE_SUCCESS:
      return action.payload.positions
    default:
      return state
  }
}

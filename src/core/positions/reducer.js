import {
  RESET_POSITIONS, ADD_PLAYER_POSITION, REMOVE_PLAYER_POSITION, CLEAN_PLAYER_POSITION
} from '../constants/actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case RESET_POSITIONS:
      return {}
    case ADD_PLAYER_POSITION:
      return {
        ...state,
        [action.position]: action.id
      }
    case REMOVE_PLAYER_POSITION:
    case CLEAN_PLAYER_POSITION:
      return {
        ...state,
        [action.position]: null
      }
    default:
      return state
  }
}

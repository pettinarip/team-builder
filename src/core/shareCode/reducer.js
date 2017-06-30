import { shareCodeTypes } from './actionTypes'

const initialState = {
  code: null,
  loading: false
}

export const shareCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case shareCodeTypes.NEW_SHARE_CODE:
      return { ...state, loading: true }
    case shareCodeTypes.NEW_SHARE_CODE_SUCCESS:
      return { ...state, code: action.code, loading: false }
    default:
      return state
  }
}

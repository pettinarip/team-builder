import { authTypes } from './actionTypes'

const initialState = {
  authenticated: false,
  uid: null,
  user: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SIGN_IN_SUCCESS:
      return {
        authenticated: true,
        uid: action.payload.user.uid,
        user: action.payload.user.toJSON()
      }
    case authTypes.SIGN_OUT_SUCCESS:
      return {
        authenticated: false,
        uid: null,
        user: null
      }
    default:
      return state
  }
}

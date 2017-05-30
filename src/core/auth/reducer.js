import * as types from './actionTypes'

const initialState = {
  authenticated: false,
  uid: null,
  user: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS:
      return {
        authenticated: true,
        uid: action.payload.user.uid,
        user: action.payload.user.toJSON()
      }
    case types.SIGN_OUT_SUCCESS:
      return {
        authenticated: false,
        uid: null,
        user: null
      }
    default:
      return state
  }
}

export default authReducer

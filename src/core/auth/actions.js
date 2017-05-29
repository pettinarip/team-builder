import firebase from 'firebase'
import * as types from './actionTypes'

export const signIn = authProvider => ({
  type: types.SIGN_IN,
  payload: { authProvider }
})

export const signInSuccess = user => ({
  type: types.SIGN_IN_SUCCESS,
  payload: { user }
})

export const signInFailure = error => ({
  type: types.SIGN_IN_FAILURE,
  payload: { error }
})

export const signInWithGithub = () => signIn(
  new firebase.auth.GithubAuthProvider()
)

export const signOut = () => ({
  type: types.SIGN_OUT
})

export const signOutSuccess = () => ({
  type: types.SIGN_OUT_SUCCESS
})

export const signOutFailure = error => ({
  type: types.SIGN_OUT_FAILURE,
  payload: { error }
})

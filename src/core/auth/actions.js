import firebase from 'firebase'
import { authTypes } from './actionTypes'

export const authActions = {
  signIn: authProvider => ({
    type: authTypes.SIGN_IN,
    payload: { authProvider }
  }),

  signInSuccess: user => ({
    type: authTypes.SIGN_IN_SUCCESS,
    payload: { user }
  }),

  signInFailure: error => ({
    type: authTypes.SIGN_IN_FAILURE,
    payload: { error }
  }),

  signInWithGithub: () => authActions.signIn(
    new firebase.auth.GithubAuthProvider()
  ),

  signInWithGoogle: () => authActions.signIn(
    new firebase.auth.GoogleAuthProvider()
  ),

  signOut: () => ({
    type: authTypes.SIGN_OUT
  }),

  signOutSuccess: () => ({
    type: authTypes.SIGN_OUT_SUCCESS
  }),

  signOutFailure: error => ({
    type: authTypes.SIGN_OUT_FAILURE,
    payload: { error }
  })
}

import { fork, take, call, put, all } from 'redux-saga/effects'
import { authActions } from './actions'
import { authTypes } from './actionTypes'
import { firebaseAuth } from 'core/firebase'
import history from 'view/history'

function * signIn (authProvider) {
  try {
    const authData = yield call(
      [firebaseAuth, 'signInWithPopup'],
      authProvider
    )
    yield put(authActions.signInSuccess(authData.user))
    yield call(history.push, '/')
  } catch (error) {
    yield put(authActions.signInFailure(error))
  }
}

function * signOut () {
  try {
    yield call([firebaseAuth, 'signOut'])
    yield put(authActions.signOutSuccess())
    yield call(history.replace, '/sign-in')
  } catch (error) {
    yield put(authActions.signOutFailure(error))
  }
}

function * watchSignIn () {
  while (true) {
    let { payload } = yield take(authTypes.SIGN_IN)
    yield fork(signIn, payload.authProvider)
  }
}

function * watchSignOut () {
  while (true) {
    yield take(authTypes.SIGN_OUT)
    yield fork(signOut)
  }
}

export const authSagas = all([
  fork(watchSignIn),
  fork(watchSignOut)
])

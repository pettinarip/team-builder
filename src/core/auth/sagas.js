import { fork, take, call, put } from 'redux-saga/effects'
import * as actions from './actions'
import * as types from './actionTypes'
import { firebaseAuth } from 'core/firebase'
import history from 'view/history'

function * signIn (authProvider) {
  try {
    const authData = yield call(
      [firebaseAuth, 'signInWithPopup'],
      authProvider
    )
    yield put(actions.signInSuccess(authData.user))
    yield call(history.push, '/')
  } catch (error) {
    yield put(actions.signInFailure(error))
  }
}

function * signOut () {
  try {
    yield call([firebaseAuth, 'signOut'])
    yield put(actions.signOutSuccess())
    yield call(history.replace, '/sign-in')
  } catch (error) {
    yield put(actions.signOutFailure(error))
  }
}

function * watchSignIn () {
  while (true) {
    let { payload } = yield take(types.SIGN_IN)
    yield fork(signIn, payload.authProvider)
  }
}

function * watchSignOut () {
  while (true) {
    yield take(types.SIGN_OUT)
    yield fork(signOut)
  }
}

export const authSagas = [
  fork(watchSignIn),
  fork(watchSignOut)
]

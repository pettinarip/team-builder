import { fork, take, call, put, all, select } from 'redux-saga/effects'
import { shareCodeActions } from './actions'
import { shareCodeTypes } from './actionTypes'
import { getActiveLayout, getPositions, getUser } from 'core/selectors'
import * as api from './api'

function * generateCode (payload, token) {
  try {
    const code = yield call(api.generateCode, payload, token)
    yield put(shareCodeActions.newCodeSuccess(code))
  } catch (e) {
    yield put(shareCodeActions.newCodeFailure(e))
  }
}

function * loadShareCode (code) {
  try {
    const payload = yield call(api.loadShareCode, code)
    const players = yield call(api.getPlayersByUserId, payload.userId)
    yield put(shareCodeActions.loadShareCodeSuccess({
      ...payload,
      players
    }))
  } catch (e) {
    yield put(shareCodeActions.loadShareCodeFailure(e))
  }
}

function * watchGenerateShareCode () {
  while (true) {
    yield take(shareCodeTypes.NEW_SHARE_CODE)
    const layout = yield select(getActiveLayout)
    const positions = yield select(getPositions)
    const user = yield select(getUser)
    yield call(generateCode, {
      layout: layout.id,
      userId: user.uid,
      positions
    }, user.stsTokenManager.accessToken)
  }
}

function * watchLoadShareCode () {
  while (true) {
    const { code } = yield take(shareCodeTypes.LOAD_SHARE_CODE)
    yield call(loadShareCode, code)
  }
}

export const shareCodeSagas = all([
  fork(watchGenerateShareCode),
  fork(watchLoadShareCode)
])

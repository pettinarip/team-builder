import { fork, take, call, put, cancel, all, select } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { shareCodeActions } from './actions'
import { shareCodeTypes } from './actionTypes'
import { authTypes } from 'core/auth'
import { getActiveLayout, getPositions } from 'core/selectors'
import shareCodeList from './list'

function subscribe () {
  return eventChannel(emit => shareCodeList.subscribe(emit))
}

function * read () {
  const channel = yield call(subscribe)
  while (true) {
    let action = yield take(channel)
    yield put(action)
  }
}

function * write (context, method, onError, ...params) {
  try {
    yield call([context, method], ...params)
  } catch (error) {
    yield put(onError(error))
  }
}

const generateCode = write.bind(null, shareCodeList, shareCodeList.push, shareCodeActions.newCodeFailure)

function * watchAuthentication () {
  while (true) {
    yield take(authTypes.SIGN_IN_SUCCESS)

    shareCodeList.path = `shareCodes`
    const job = yield fork(read)

    yield take([authTypes.SIGN_OUT_SUCCESS])
    yield cancel(job)
  }
}

function * watchGenerateShareCode () {
  while (true) {
    yield take(shareCodeTypes.NEW_SHARE_CODE)
    const layout = yield select(getActiveLayout)
    const positions = yield select(getPositions)
    yield fork(generateCode, {
      layout: layout.id,
      positions
    })
  }
}

export const shareCodeSagas = all([
  fork(watchAuthentication),
  fork(watchGenerateShareCode)
])

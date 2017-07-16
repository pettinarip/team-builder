import { fork, take, call, put, all } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import layoutsList from './layouts-list'

function subscribe () {
  return eventChannel(emit => layoutsList.subscribe(emit))
}

function * read () {
  layoutsList.path = `layouts`
  const channel = yield call(subscribe)
  while (true) {
    let action = yield take(channel)
    yield put(action)
  }
}

export const layoutsSagas = all([
  fork(read)
])

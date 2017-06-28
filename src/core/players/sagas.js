import { fork, take, call, put, cancel, all } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { playersActions } from './actions'
import { playersTypes } from './actionTypes'
import { authTypes } from 'core/auth'
import playersList from './players-list'

function subscribe () {
  return eventChannel(emit => playersList.subscribe(emit))
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

const createPlayer = write.bind(null, playersList, playersList.push, playersActions.addPlayerFailure)
// const removePlayer = write.bind(null, playersList, playersList.remove, actions.removePlayerFailed)
// const updatePlayer = write.bind(null, playersList, playersList.update, actions.updatePlayerFailed)

function * watchAuthentication () {
  while (true) {
    let { payload } = yield take(authTypes.SIGN_IN_SUCCESS)

    playersList.path = `players/${payload.user.uid}`
    const job = yield fork(read)

    yield take([authTypes.SIGN_OUT_SUCCESS])
    yield cancel(job)
  }
}

function * watchAddPlayer () {
  while (true) {
    let { player } = yield take(playersTypes.ADD_PLAYER_REQUEST)
    yield fork(createPlayer, player)
  }
}

export const playersSagas = all([
  fork(watchAddPlayer),
  fork(watchAuthentication)
])

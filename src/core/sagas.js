import { all } from 'redux-saga/effects'
import { authSagas } from './auth'
import { playersSagas } from './players'

export default function * sagas () {
  yield all([authSagas, playersSagas])
}

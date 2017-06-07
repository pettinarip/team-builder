import { all } from 'redux-saga/effects'
import { authSagas } from './auth'
import { playersSagas } from './players'
import { layoutsSagas } from './layouts'

export default function * sagas () {
  yield all([authSagas, playersSagas, layoutsSagas])
}

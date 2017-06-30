import { all } from 'redux-saga/effects'
import { authSagas } from './auth'
import { playersSagas } from './players'
import { layoutsSagas } from './layouts'
import { shareCodeSagas } from './shareCode'

export default function * sagas () {
  yield all([authSagas, playersSagas, layoutsSagas, shareCodeSagas])
}

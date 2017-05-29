import { firebaseAuth } from 'core/firebase'
import * as actions from './actions'

export function initAuth (dispatch) {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(
      authUser => {
        if (authUser) {
          dispatch(actions.signInSuccess(authUser))
        }

        resolve()
        unsubscribe()
      },
      error => reject(error)
    )
  })
}

import { FirebaseList } from 'core/firebase'
import { shareCodeActions } from './actions'

export default new FirebaseList({
  onAdd: shareCodeActions.newCodeSuccess
})

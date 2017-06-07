import { FirebaseList } from 'core/firebase'
import { layoutsActions } from './actions'

export default new FirebaseList({
  onLoad: layoutsActions.loadLayoutsSuccess
})

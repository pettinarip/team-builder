import { FirebaseList } from 'core/firebase'
import { playersActions } from './actions'

export default new FirebaseList({
  onAdd: playersActions.addPlayerSuccess,
  onChange: () => ({type: 'NOOP'}),
  onLoad: () => ({type: 'NOOP'}),
  onRemove: () => ({type: 'NOOP'})
})

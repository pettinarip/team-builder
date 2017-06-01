import { FirebaseList } from 'core/firebase'
import { playersActions } from './actions'

export default new FirebaseList({
  onAdd: playersActions.addPlayerSuccess,
  onChange: () => ({type: 'NOOP'}),
  onLoad: playersActions.loadPlayersSuccess,
  onRemove: () => ({type: 'NOOP'})
})

import { FirebaseList } from 'core/firebase'
import { playersActions } from './actions'

export default new FirebaseList({
  onAdd: playersActions.addPlayerSuccess,
  onChange: playersActions.updatePlayerSuccess,
  onLoad: playersActions.loadPlayersSuccess,
  onRemove: playersActions.removePlayerSuccess
})

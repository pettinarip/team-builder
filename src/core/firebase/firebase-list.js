import { firebaseDb } from './firebase'

export class FirebaseList {
  constructor (actions) {
    this._actions = actions
  }

  get path () {
    return this._path
  }

  set path (value) {
    this._path = value
  }

  push (value) {
    return new Promise((resolve, reject) => {
      firebaseDb.ref(this.path)
        .push(value, error => error ? reject(error) : resolve())
    })
  }

  remove (key) {
    return new Promise((resolve, reject) => {
      firebaseDb.ref(`${this.path}/${key}`)
        .remove(error => error ? reject(error) : resolve())
    })
  }

  update (key, value) {
    return new Promise((resolve, reject) => {
      firebaseDb.ref(`${this.path}/${key}`)
        .update(value, error => error ? reject(error) : resolve())
    })
  }

  subscribe (emit) {
    let ref = firebaseDb.ref(this.path)
    let initialized = false
    let list = []

    const emitAction = (action, ...args) => {
      if (!action) return
      emit(action(...args))
    }

    ref.once('value', () => {
      initialized = true
      emitAction(this._actions.onLoad, list)
    })

    ref.on('child_added', snapshot => {
      if (initialized) {
        emitAction(this._actions.onAdd, this.unwrapSnapshot(snapshot))
      } else {
        list.push(this.unwrapSnapshot(snapshot))
      }
    })

    ref.on('child_changed', snapshot => {
      emitAction(this._actions.onChange, this.unwrapSnapshot(snapshot))
    })

    ref.on('child_removed', snapshot => {
      emitAction(this._actions.onRemove, this.unwrapSnapshot(snapshot))
    })

    return () => ref.off()
  }

  unwrapSnapshot (snapshot) {
    let attrs = snapshot.val()
    attrs.id = snapshot.key
    return attrs
  }
}

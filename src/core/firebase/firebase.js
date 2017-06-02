import firebase from 'firebase'
import config from './config'

export const firebaseApp = firebase.initializeApp(config)
export const firebaseAuth = firebaseApp.auth()
export const firebaseDb = firebaseApp.database()

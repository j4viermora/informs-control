import { getFirestore, Firestore } from 'firebase/firestore/lite'
import { app } from './app'

export const db: Firestore = getFirestore(app)
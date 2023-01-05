import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore/lite'
import { app } from './app'

export const db: Firestore = getFirestore(app)

async function getCities(db: Firestore) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}
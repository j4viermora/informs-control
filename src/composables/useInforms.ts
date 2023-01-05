import { db } from '../firebase/db'
import { collection, addDoc, getDocs, where, query } from 'firebase/firestore/lite'
import { IInform } from '../interfaces/informs.interfaces'
import { ref } from 'vue'



export const useInforms = () => {

    const isLoading = ref(false)

    const addInform = async (informBody: IInform) => {
        isLoading.value = true
        try {
            const docRef = await addDoc(collection(db, 'informs'), informBody)
            return {
                id: docRef.id,
                message: 'Información agregada correctamente'
            }
        } catch (error) {
            console.log(error)
        } finally {
            isLoading.value = false
        }
    }

    const getInforms = async () => {
        const q = query(collection(db, 'informs'), where('date', '==', new Date().toISOString().split('T')[0]))
        const querySnapShot = await getDocs(q);
        let data: any[] = []
        querySnapShot.forEach(doc => {
            data.push({
                id: doc.id,
                ...doc.data()
            })
        })

        console.log(data)
    }


    return {
        addInform,
        getInforms,
        isLoading
    }
}
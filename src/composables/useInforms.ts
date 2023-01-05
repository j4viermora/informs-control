import { db } from '../firebase/db'
import { collection, addDoc, getDocs, deleteDoc, where, query, doc, updateDoc } from 'firebase/firestore/lite'
import { IInform } from '../interfaces/informs.interfaces'
import { ref } from 'vue'



export const useInforms = () => {

    const isLoading = ref<boolean>(false)

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
        isLoading.value = true
        try {
            const q = query(collection(db, 'informs'), where('date', '==', new Date().toISOString().split('T')[0]))
            const querySnapShot = await getDocs(q);
            let data: any[] = []
            querySnapShot.forEach(doc => {
                data.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
        } catch (error) {
            return error
        } finally {
            isLoading.value = false
        }
    }

    /**
     * "It takes an id and an informBody, and then it updates the inform with the given id with the given
     * informBody."
     * @param {string} id - string
     * @param {IInform} informBody - IInform
     * @returns an object with two properties: message and id.
     */
    const updateInform = async (id: string, informBody: IInform) => {
        isLoading.value = true
        try {
            const informRef = doc(db, 'informs', id)
            await updateDoc(informRef, {
                ...informBody
            })

            return {
                message: 'Información actualizada correctamente',
                id
            }
        } catch (error) {
            return error
        } finally {
            isLoading.value = false
        }
    }

    /**
     * It deletes a document from informs collection in a Firestore database.
     * @param {string} id - string
     * @returns an object with the message and the id of the document that was deleted.
     */
    const deleteInform = async (id: string) => {
        try {
            isLoading.value = true
            await deleteDoc(doc(db, 'informs', id))
            return {
                message: 'Información eliminada correctamente',
                id
            }
        } catch (error) {
            return error
        } finally {
            isLoading.value = false
        }
    }


    return {
        addInform,
        getInforms,
        deleteInform,
        updateInform,
        isLoading
    }
}
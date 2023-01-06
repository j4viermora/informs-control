import { signGoogle, signOutGoogle, getSession } from '../firebase/auth'
export const useAuth = () => {
    return {
        getSession,
        signGoogle,
        signOutGoogle
    }
}
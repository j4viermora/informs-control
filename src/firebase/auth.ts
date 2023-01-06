import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from "./app";

const provider = new GoogleAuthProvider();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const signGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);

        return { credential, result };
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        return {
            errorCode,
            errorMessage,
            email,
            credential
        }
    }
}

export const signOutGoogle = async () => {
    try {
        await signOut(auth);
        console.log('done')
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            errorCode,
            errorMessage
        }
    }
}


export const getSession = async () => {
    return onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            console.log(user)
            return user
            // ...
        } else {
            // User is signed out
            // ...
        }
    });


} 
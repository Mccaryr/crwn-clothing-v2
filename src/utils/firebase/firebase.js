import { initializeApp } from 'firebase/app'
import { getAuth,
     signInWithRedirect, 
     signInWithPopup, 
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged
     } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
}   from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2B-OSCSi6kNjqwIUkKA5_G-8qvfheBHY",
    authDomain: "crwn-clothing-db-62a83.firebaseapp.com",
    projectId: "crwn-clothing-db-62a83",
    storageBucket: "crwn-clothing-db-62a83.appspot.com",
    messagingSenderId: "475222108067",
    appId: "1:475222108067:web:8894743663fc99be561c16"
  };
  
  // Initialize Firebase
  // const firebaseApp = initializeApp(firebaseConfig);
  initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
       const { displayName, email } = userAuth;
       const createdAt = new Date(); 

       try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation
        });

    } catch(error) {
        console.log('error creating user', error.message);
    }
    }
     return userDocRef;   
  }


  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
  }

  export const signOutUser = async () => await signOut(auth);

  export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback)
  }
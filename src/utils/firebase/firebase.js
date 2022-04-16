import { initializeApp } from 'firebase/app'
import { getAuth,
     signInWithRedirect, 
     signInWithPopup, 
     GoogleAuthProvider
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
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
       const { displayName, email } = userAuth;
       const createdAt = new Date(); 

       try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
        });

    } catch(error) {
        console.log('error creating user', error.message);
    }
    }
     return userDocRef   
  }


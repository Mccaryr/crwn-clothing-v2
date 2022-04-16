import React from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase';

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <button onClick={logGoogleUser}>
      Sign in with Google Pop Up
    </button>
    </div>
    
  )
}

export default SignIn
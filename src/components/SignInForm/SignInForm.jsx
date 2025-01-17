import React from 'react'
import { useState } from 'react'
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase'
import FormInput from '../FormInput/FormInput'
import './SignInForm.scss'
import Button from '../Button/Button'


const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;


    const handleChange = (event) => {
      const {name, value} = event.target;

      setFormFields({...formFields, [name]: value})
    }

    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
      await signInWithGooglePopup();
      console.log('signed in with google?')
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
          await signInAuthUserWithEmailAndPassword(email, password)
          resetFormFields();

        } catch(error) {
            switch(error.code) {
              case 'auth/wrong password':
                alert('Incorrect password')
                break;
              case 'auth/user-not-found':
                alert('No user associated with email')
                break;
              default:
                console.log(error)
            }
        }
    }

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
            <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
            <div className='buttons-container'>
              <Button type="submit">Sign In</Button>
              <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
            </div>
        </form>
    </div>
  )
}

export default SignInForm

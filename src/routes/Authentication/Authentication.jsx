import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm/SignInForm';
import './Authentication.scss'

const Authentication = () => {

  return (
    <div className='authentication-container'>
      <h1>Sign In</h1>
      <SignInForm />
      <SignUpForm />
    </div>
    
  )
}

export default Authentication
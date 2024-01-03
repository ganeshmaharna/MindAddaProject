// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import AuthModal from '../Auth/AuthModal'

// eslint-disable-next-line react/prop-types
const AuthPage = ({login}) => {
  return (
    <>
      <Navbar/>
      <AuthModal login={login}/>
    </>
  )
}

export default AuthPage
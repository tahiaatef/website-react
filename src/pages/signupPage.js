import React from 'react'
import Head from '../components/headers-and-footer/head'
import Navbar from '../components/login/navbar'
import Signup from '../components/signup/signUp'
import Footer from '../components/headers-and-footer/footer'

function signupPage() {
  return (
    <>
      <Head />
      <Navbar />
      <Signup />
      <Footer/>
    </>
  )
}

export default signupPage
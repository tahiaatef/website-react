import React from 'react'
import Head from '../components/headers-and-footer/head'
import Navbar from '../components/login/navbar'
import Login from '../components/login/logIn'
import Footer from '../components/headers-and-footer/footer'

function loginPage() {
  return (
    <>
      <Head />
      <Navbar />
      <Login />
      <Footer/>

    </>
  )
}

export default loginPage
import React from 'react'
import Header from '../components/headers-and-footer/header'
import Head from '../components/headers-and-footer/head'
import Home from '../components/home/home'
import Footer from '../components/headers-and-footer/footer'

function homePage() {
  return (
    <>
    <Head/>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}

export default homePage
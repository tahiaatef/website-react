import React from 'react'
import Header from '../components/headers-and-footer/header'
import Head from '../components/headers-and-footer/head'
import About from '../components/about/about'
import Footer from '../components/headers-and-footer/footer'

function aboutPage() {
  return (
    <>
      <Head />
      <Header />
      <About/>
      <Footer/>
    </>
  )
}

export default aboutPage
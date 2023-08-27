import React from 'react'
import Header from '../components/headers-and-footer/header'
import Head from '../components/headers-and-footer/head'
import Cart from '../components/cart/cart'
import Footer from '../components/headers-and-footer/footer'

function cartPage() {
  return (
    <>
      <Head />
      <Header />
      <Cart/>
      <Footer/>
    </>
  )
}

export default cartPage
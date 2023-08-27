import React from 'react'
import Header from '../components/headers-and-footer/header'
import Head from '../components/headers-and-footer/head'
import Product from '../components/prdoucts/Product'
import Footer from '../components/headers-and-footer/footer'

function productsPage() {
  return (
    <>
      <Head />
      <Header />
      <Product />
      <Footer/>
    </>
  )
}

export default productsPage
import React from 'react'
import Header from '../components/headers-and-footer/header'
import Head from '../components/headers-and-footer/head'
import ProductsList from '../components/listproduct/productsList'
import Footer from '../components/headers-and-footer/footer'

function listProductPage() {
  return (
    <>
      <Head />
      <Header />
      <ProductsList/>
      <Footer/>
    </>
  )
}

export default listProductPage
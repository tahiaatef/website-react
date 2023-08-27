import React from 'react'
import Header from '../components/headers-and-footer/header'
import Head from '../components/headers-and-footer/head'
import ProductDetail from '../components/prdoucts/ProductDetail'
import Footer from '../components/headers-and-footer/footer'

function ProductDetailsPage() {
    return (
        <>
            <Head />
            <Header />
            <ProductDetail />
            <Footer/>
        </>
    )
}

export default ProductDetailsPage
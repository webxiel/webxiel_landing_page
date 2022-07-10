import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const Products = () => {
  const text = "Here's a few inhouse projects owned by webxiel."
  return (
    <>
      <Header title='products' text={text} />
      <main className="products">

      </main>
      <Footer />
    </>
  )
}

export default Products
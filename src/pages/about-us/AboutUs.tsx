import React from 'react'
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header'

const AboutUs = () => {
  const text = "We are a web based company looking at enabling business strive better online, using better web technologies";
  return (
    <>
      <Header title='about us' text={text}/>
      <main className="about-us">

      </main>
      <Footer />
    </>
  )
}

export default AboutUs
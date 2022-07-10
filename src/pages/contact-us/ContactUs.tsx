import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './ContactUs.scss'
import { ReactComponent as Phone } from '../../assets/images/phone.svg'
import { ReactComponent as Email } from '../../assets/images/email.svg'
import Button from '../../components/button/Button'

const ContactUs = () => {
  return (
    <>
      <Header title='contact us' text='' />
      <main className="contact-us">
        <section className="contact-us__company">
        <header className="contact-us__company__header">
          <h2 className="contact-us__company__header__title">
            contact details
          </h2>
        </header>
        <article className="contact-us__company__details">
          <h2>contact info</h2>
          <figure className="footer__content__contact-info__phone">
            <Phone />
            <p>09021526497</p>
          </figure>
          <figure className="footer__content__contact-info__email">
            <Email />
            <p>webxiel@gmail.com</p>
          </figure>
        </article>
      </section>
      {/* contact us form */}
      <form action="" className="contact-us__form">
        <input type="text" name="name" id="name" placeholder='Enter your name*' required/>

        <input type="email"  placeholder='Enter your email address*' required />

        <textarea name="" id="" placeholder='Write your request'></textarea>

        <Button text='send'/>
      </form>
      </main>
      <Footer />
    </>
  )
}

export default ContactUs
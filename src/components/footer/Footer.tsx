import './Footer.scss'
import { ReactComponent as Instagram } from '../../assets/images/instagram.svg'
import { ReactComponent as Facebook } from '../../assets/images/facebook.svg'
import { ReactComponent as Twitter } from '../../assets/images/twitter.svg'
import { ReactComponent as LinkedIn } from '../../assets/images/linkedin.svg'
import { ReactComponent as Phone } from '../../assets/images/phone.svg'
import { ReactComponent as Email } from '../../assets/images/email.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__content">
        <article className="footer__content__company">
          <figure className="footer__content__company__logo">
            <h2 className="logo">
              webxiel
            </h2>
          </figure>
          <p className="footer__content__company__service">
            Competent and Professional service
          </p>
          <figure className="footer__content__company__socials">
            <Instagram />
            <LinkedIn />
            <Facebook />
            <Twitter />
          </figure>
        </article>
        {/* Contact information */}
        <article className="footer__content__contact-info">
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
      <section className="footer__copyright">
        <p className="footer__copyright__text">
          &copy; 2021 webxiel all rights reserved.
        </p>
      </section>
    </footer>
  )
}

export default Footer
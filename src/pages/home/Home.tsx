import './Home.scss'
import bgImage from '../../assets/images/bg.png'
import Header from '../../components/header/Header'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'
import heroImage from '../../assets/images/home-lady.png'
import commentLeft from '../../assets/images/left-comment.png'
import commentRight from '../../assets/images/right-comment.png'
import { ReactComponent as YellowBg } from '../../assets/images/home-lady-bg.svg'
import { ReactComponent as YellowShape } from '../../assets/images/shape-yellow.svg'
import AboutWebxiel from '../about-us/components/AboutWebxiel'
import ProductsLogic, { ProductsSummary } from '../products/components/ProductsSummary'
import Testimonial from '../../components/testimonial/Testimonial'
import Footer from '../../components/footer/Footer'
import { ServiceSummary } from '../services/ServicesLogic'
import { ReactComponent as Sponsors } from '../../assets/images/partners.svg'
import { ReactComponent as AppStore } from '../../assets/images/app-store.svg'
import { ReactComponent as PlayStore } from '../../assets/images/play-store.svg'
import { ReactComponent as UpdateSign } from '../../assets/images/update-design.svg'

const Home = () => {
  return (
    <>
    <header className="home__header">
      <picture className="home__bg">
        <img src={bgImage} alt="" />
      </picture>
      <Header text='' title='' showText={false}>
        <section className="hero__text">
          <h1 className="hero__text__title">
            Give your business a smarter way to operate.
          </h1>
          <p className="hero__text__details">
            We give businesses a smarter way to operate and interact with their customers and clients.
          </p>
          <Link to='/contact-us'>
            <Button text='get started' />
          </Link>
        </section>
        <section className="hero__image">
          <figure className="hero__image__main">
            <figure className='left-comment comment'>
              <img src={commentLeft} alt="" />
              <div className="comment-info">
                <p className="comment-info__name">ronald richards</p>
                <p className="comment-info__comment">
                  Love the new mobile app
                </p>
              </div>
            </figure>
            <figure className='right-comment comment'>
              <img src={commentRight} alt="" />
              <div className="comment-info">
                <p className="comment-info__name">jerry wilson</p>
                <p className="comment-info__comment">
                  Your new website is amazing
                </p>
              </div>
            </figure>
            <YellowBg />
            <img src={heroImage} alt="" className='hero__img'/>
          </figure>
        </section>
      </Header>
      <figure className="home__header__yellow-dot">
        <YellowShape />
      </figure>
    </header>
    <main className="home__main">
      <section className="sponsors">
        <Sponsors />
      </section>
      <AboutWebxiel />
      <section className="home__services">
        <header className="home__services__header">
          <h2 className="home__services__header__title">
            services we offer
          </h2>
        </header>
        <section className="home__services__container">
          <ServiceSummary />
        </section>
      </section>
      <section className="home__products">
        <header className="products__header">
          <h1 className="products__header__title">
            apps owned by webxiel
          </h1>
        </header>
        <ProductsSummary />
      </section>
      <Testimonial />
      <section className="home__update">
        <article className="home__update__text">
          <h3 className="update__title">
            Wash now is coming soon on all devices.
          </h3>
          <p className="update__details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ea et, tempore accusantium tempora sunt?
          </p>
        </article>
        <div className="update-design">
          <UpdateSign />
        </div>
        <figure className="home__update__images">
          <AppStore />
          <PlayStore />
        </figure>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default Home
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header'
import './Services.scss';
import { ServicesLogic, TestimonyLogic } from './ServicesLogic';
import { ReactComponent as RightShape } from '../../assets/images/shape-desktop.svg'

const Services = () => {
  const text = "We are a web based company looking at enabling business strive better online, using better web technologies";
  return (
    <>
      <Header title='services' text={text}/>
      <main className="services">
        <header className='services__header'>
          <h1 className='services__header__title'>services we deliver</h1>
        </header>
        
        {/* services displayed here */}
        <ServicesLogic />

        {/* testimonial section */}
        <aside className="testimonial">
          <figure className="testimonial__right-shape">
          <RightShape />
        </figure>
        <header className="testimonial__header">
          <h3 className="testimonial__header__title">testimonial</h3>
          <h2 className="testimonial__header__text">
            See what our clients are saying about Webxiel
          </h2>
        </header>
        </aside>
        <section className="testimonial__carousel">
          <TestimonyLogic />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Services
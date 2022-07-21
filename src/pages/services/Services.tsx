import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header'
import './Services.scss';
import { ServicesLogic } from './ServicesLogic';
import Testimonial from '../../components/testimonial/Testimonial';

const Services = () => {
  const text = "We are a web based company looking at enabling business strive better online, using better web technologies";
  return (
    <>
      <Header title='services' text={text} />
      <main className="services">
        <header className='services__header'>
          <h1 className='services__header__title'>services we deliver</h1>
        </header>

        {/* services displayed here */}
        <ServicesLogic />

        {/* testimonial section */}
        <Testimonial />
      </main>
      <Footer />
    </>
  )
}

export default Services
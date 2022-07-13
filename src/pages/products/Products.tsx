import "./Products.scss"
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ProductsLogic from './components/ProductsSummary'
import { TestimonyLogic } from "../services/ServicesLogic"
import Testimonial from "../../components/testimonial/Testimonial"

const Products = () => {
  const text = "Here's a few inhouse projects owned by webxiel."
  return (
    <>
      <Header title='products' text={text} />
      <main className="products">
        <header className="products__header">
          <h1 className="products__header__title">
            apps owned by webxiel
          </h1>
        </header>      
        <ProductsLogic />
        <Testimonial />
      </main>
      <Footer />
    </>
  )
}

export default Products
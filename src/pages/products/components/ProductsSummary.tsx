import { ReactComponent as AppStore } from "../../../assets/images/app-store.svg"
import { ReactComponent as PlayStore } from "../../../assets/images/play-store.svg"
import { ReactComponent as ProductBg } from "../../../assets/images/product-bg.svg"
import washNowImg from "../../../assets/images/mobileapp-desktop.png"
import realEstate from "../../../assets/images/real-estate.png"
import React from "react"
import "./ProductsSummary.scss"
import { ReactComponent as Shop } from "../../../assets/images/shop.svg"
import { ReactComponent as Order } from "../../../assets/images/order.svg"
import { ReactComponent as Bike } from "../../../assets/images/bike.svg"
import screen1 from "../../../assets/images/screen1.png"
import screen2 from "../../../assets/images/screen2.png"
import screen3 from "../../../assets/images/screen3.png"
import screen4 from "../../../assets/images/screen4.png"
import screen5 from "../../../assets/images/screen5.png"

type product = {
  image: string,
  users: number,
  jobs: number,
  title: string,
  details: string,
  child?: JSX.Element
}

let washAppChild = <>
   <h3 className="how-it-works__title">
      How it works
    </h3>
    <section className="product__how-it-works">
      <article>
        <figure>
          <Shop />
        </figure>
        <p className="how-it-works__step">
          search laundry store
        </p>
        <p className="how-it-works__details">
          Search for the laundry store of your choice
        </p>
      </article>
      <article>
        <figure>
          <Order />
        </figure>
        <p className="how-it-works__step">
          place order
        </p>
        <p className="how-it-works__details">
          Select the amount of clothes and the type of service you want
        </p>
      </article>
      <article>
        <figure>
          <Bike />
        </figure>
        <p className="how-it-works__step">
          Get it picked up &amp; Delivered
        </p>
        <p className="how-it-works__details">
          Your laundry will be picked up and delivered to your home when the laundry is done.
        </p>
      </article>
    </section>
    <h3 className="screens__title">screens</h3>
    <section className="product__screens">
      <picture className="product__screens__container">
        <img src={screen1} alt="choose your experience" />
        <img src={screen2} alt="welcone screen" />
        <img src={screen3} alt="Check stores and select" />
        <img src={screen4} alt="make payment" />
        <img src={screen5} alt="user profile" />
      </picture>
    </section>
</>


const productsData: product[] = [
  {
    image: washNowImg,
    users: 9823,
    jobs: 9823,
    title: "wash now",
    details: "Wash now is a laundry app which helps users find Laundry stores near them. The user can also pay and get their laundry picked up and delivered when the product is done",
    child: washAppChild,
  },
  {
    image: realEstate,
    users: 9823,
    jobs: 9823,
    title: "real estate app",
    details: "This app helps users find and rent houses from all over. All the user has to do is search and pay",
  },
  {
    image: realEstate,
    users: 9823,
    jobs: 9823,
    title: "school management app",
    details: "Wash now is a laundry app which helps users find Laundry stores near them. The user can also pay and get their laundry picked up and delivered when the product is done",
  },
];

const ProductsLogic = () => {
  return (
    <section className="products__container">
      {
        productsData.map((product: product, index) => {
          const { image, users, jobs, title, details, child } = product;

          return (
            (index + 2) % 2 == 0 ? 
            (
              <article className="products__product" key={title}>
                <section className="product__intro">
                  <figure className="product__image">
                    <ProductBg />
                    <div className="product__image__users">
                      <p className="number">{users}</p>
                      <p className="users">users</p>
                    </div>
                    <div className="product__image__jobs">
                      <p className="number">{jobs}</p>
                      <p className="jobs">Laundries processed</p>
                    </div>
                    <img src={image} alt="macbook" />
                  </figure>
                  <div className="product__details product__details--left">
                    <h2 className="product__title">{title}</h2>
                    <p className="product__text">
                      {details}
                    </p>
                    <figure className="download-buttons">
                      <AppStore /> 
                      <PlayStore />
                    </figure>
                  </div>
                </section>

                <section className="product__manual">
                  {child}
                </section>
            </article>
            ) :
            (
              <article className="products__product" key={title}>
                <section className="product__intro">
                  <div className="product__details product__details--right">
                    <h2 className="product__title">{title}</h2>
                    <p className="product__text">
                      {details}
                    </p>
                    <figure className="download-buttons">
                      <AppStore /> 
                      <PlayStore />
                    </figure>
                  </div>
                  <figure className="product__image">
                    <ProductBg />
                    <div className="product__image__users">
                      <p className="number">{users}</p>
                      <p className="users">users</p>
                    </div>
                    <div className="product__image__jobs">
                      <p className="number">{jobs}</p>
                      <p className="jobs">Laundries processed</p>
                    </div>
                    <img src={image} alt="iphone" />
                  </figure>
                </section>

                <section className="product__manual">
                  {child}
                </section>
            </article>
            )
          )
        })
      }
    </section>
  )
}

export default ProductsLogic
import client from '../../assets/images/client-desktop.png'
import Carousel from '../carousel/Carousel';
import { ReactComponent as RightShape } from '../../assets/images/shape-desktop.svg'
import "./Testimonial.scss"


type testimonyItem = {
  name: string,
  work: string,
  image: string,
  testimony: string,
}

const testimonyData = [
  {
    name: "john okoli",
    work: "web developer",
    image: client,
    testimony: "OMG! I cannot believe that I have got a brand new landing page after contacting Webxiel, it was super easy to request and receive the website."
  },
  {
    name: "john igweee",
    work: "product manager",
    image: client,
    testimony: "OMG! I cannot believe that I have got a brand new landing page after contacting Webxiel, it was super easy to request and receive the website."
  },
  {
    name: "okoli john",
    work: "entrepreneur",
    image: client,
    testimony: "OMG! I cannot believe that I have got a brand new landing page after contacting Webxiel, it was super easy to request and receive the website."
  }
];

let testimonyArray = testimonyData.map((item: testimonyItem) => {
  const { name, work, image, testimony } = item;

  return (
    <article className='carousel__item'  key={name + work}>
      <div className="carousel__item__container">
        <p className="testimony">
          {testimony}
        </p>
        <figure className="testifier">
          <img src={image} alt="client" />
          <figcaption className="testifier__about">
            <p className="name">{name}</p>
            <p className="work">{work}</p>
          </figcaption>
        </figure>
      </div>
    </article>
  )
})

export const TestimonyLogic = () => {
  return (
    <>
      <Carousel slideCount={1} goRight={false} itemsArray={testimonyArray} />
    </>
  )
}


const Testimonial = () => {

  return(
    <>
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
    </>
  )
}

export default Testimonial
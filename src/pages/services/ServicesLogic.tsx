import Button from '../../components/button/Button'
import webAppImg from '../../assets/images/webapp-desktop.png'
import mobileAppImg from '../../assets/images/mobileapp-desktop.png'
import uiUxImg from '../../assets/images/ui-ux-desktop.png'
import socialMediaImg from '../../assets/images/social-media-desktop.png'
import client from '../../assets/images/client-desktop.png'
import Carousel from '../../components/carousel/Carousel'


export type service = {
  title: string,
  details: string,
  image: string,
  buttonText: string,
}


export const servicesArray: service[] = [
  {
    title: "website and webapps",
    details: "We design quality websites and web applications for your business",
    image: webAppImg,
    buttonText: "get service"
  },
  {
    title: "mobile applications",
    details: "Get the best mobile applications with top features and fast delivery",
    image: mobileAppImg,
    buttonText: "get service"
  },
  {
    title: "Ui/Ux introduction",
    details: "We design quality websites and web applications for your business",
    image: uiUxImg,
    buttonText: "get service"
  },
  {
    title: "social media coverage",
    details: "We can help you grow your followers with top videos and other contents on your social media handles",
    image: socialMediaImg,
    buttonText: "get service"
  },
]




export const ServicesLogic = () => {
  return (
    <section className="services__container">
      {servicesArray.map((service: service, index) => {
        const {title, details, image, buttonText} = service;
        return (
          (index + 2) % 2 == 0 ? 
          (
            <article className="services__service" key={title}>
              <div className="service__details service__details--left">
                <h2 className="service__title">{title}</h2>
                <p className="service__text">
                  {details}
                </p>
                <Button text={buttonText} />
              </div>
              <figure className="service__image">
                <img src={image} alt="macbook" />
              </figure>
            </article>
          ) : 
          (
            <article className="services__service" key={title}>
              <figure className="service__image">
                <img src={image} alt="iphone" />
              </figure>
              <div className="service__details service__details--right">
                <h2 className="service__title">{title}</h2>
                <p className="service__text">
                  {details}
                </p>
                <Button text={buttonText} />
              </div>
            </article>
          )         
        )
      })}
    </section>
  )
}

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

import Button from '../../components/button/Button'
import webAppImg from '../../assets/images/webapp-desktop.png'
import mobileAppImg from '../../assets/images/mobileapp-desktop.png'
import uiUxImg from '../../assets/images/ui-ux-desktop.png'
import socialMediaImg from '../../assets/images/social-media-desktop.png'

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

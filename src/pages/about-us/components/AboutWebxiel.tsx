import { ReactComponent as Performance } from "../../../assets/images/performance.svg"
import { ReactComponent as Delivery } from '../../../assets/images/delivery.svg'
import { ReactComponent as Powerful } from '../../../assets/images/powerful.svg'
import Button from "../../../components/button/Button";
import "./AboutWebxiel.scss"


type aboutWebxiel = {
  icon: JSX.Element,
  title: string,
  details: string,
}

const aboutWebxielData = [
  {
    icon: <Performance />,
    title: "best performance",
    details: "We provide the best products ranging from websites to mobile applications."
  },
  {
    icon: <Delivery />,
    title: "deliver on time",
    details: "We also deliver our products and services on time."
  },
  {
    icon: <Powerful />,
    title: "powerful & fully secured",
    details: "You don't need to worry about the security of your company and products."
  }
];

let aboutWebxielArray =  aboutWebxielData.map((item: aboutWebxiel, index) => {
  const {icon, title, details} = item;

  return (
    (index + 2 ) % 2 == 0 ? 
    (
      <article className="about-webxiel__cards__card">
        <figure className="about-webxiel__cards__card__icon">
          {icon}
        </figure>
        <figcaption className="about-webxiel__cards__card__details">
          <h3 className="title">
            {title}
          </h3>
          <p className="text">
            {details}
          </p>
        </figcaption>
      </article>
    ) :
    (
      <article className="about-webxiel__cards__card left">
        <figure className="about-webxiel__cards__card__icon">
          {icon}
        </figure>
        <figcaption className="about-webxiel__cards__card__details">
          <h3 className="title">
            {title}
          </h3>
          <p className="text">
            {details}
          </p>
        </figcaption>
      </article>
    )
  )
});


const AboutWebxiel = () => {
  return (
    <section className="about-webxiel">
      <section className="about-webxiel__cards">
        {aboutWebxielArray}
      </section>
      <section className="about-webxiel__get-started">
        <h4 className="about-webxiel__get-started__title">about webxiel</h4>
        <h3 className="about-webxiel__get-started__info">We create Modern and High Quality Products for your Business.</h3>
        <p className="about-webxiel__get-started__text">
          We are a web based company looking at enabling business strive better online, using better web technologies.
        </p>
        <Button text="get started" />
      </section>
    </section>
  )
}

export default AboutWebxiel
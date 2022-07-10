import "./AboutUs.scss"
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header'
import AboutWebxiel from './components/AboutWebxiel';
import ourStory from '../../assets/images/our-story.png'
import OurTeam from "./components/OurTeam";
import { ReactComponent as Partners } from '../../assets/images/partners.svg'
import { ReactComponent as Dots } from '../../assets/images/dots.svg' 

const AboutUs = () => {
  const text = "We are a web based company looking at enabling business strive better online, using better web technologies";
  return (
    <>
      <Header title='about us' text={text}/>
      <main className="about-us">
        <section className="about-us__story">
          <div className="about-us__story__container">
            <article className="about-us__story__container__content">
              <header className="about-us__story__container__content__header">
                <h2 className="title">
                  our story
                </h2>
              </header>
              <p className="about-us__story__container__content__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores minus esse harum eum deserunt. Officiis porro consequatur pariatur impedit cum nisi magni quasi minima quia blanditiis est itaque ut quam consequuntur tempora sed obcaecati eos, architecto ipsam temporibus nostrum eius.
              </p>
            </article>

            <picture className="about-us__story__container__image">
              <Dots />
              <img src={ourStory} alt="webxiel staff" />
            </picture>
          </div>
        </section>
        <AboutWebxiel />
        <OurTeam />
        <section className="about-us__partners">
          <Partners />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default AboutUs
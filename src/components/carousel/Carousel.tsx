import React, { useEffect, useRef, useState } from 'react'
import { ReactComponent as ArrowRight } from '../../assets/images/arrow-right.svg'
import { ReactComponent as ArrowLeft } from '../../assets/images/arrow-left.svg'

type carouselProps = {
  slideCount: number,
  goRight?: boolean,
  itemsArray: JSX.Element[],
  autoSlide?: boolean,
}

const Carousel = ({ slideCount, goRight = false, autoSlide = false, itemsArray }: carouselProps) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  // set a variable to hold number of times the carousel should slide
  let countDivider: number = 1;
  ((itemsArray?.length % slideCount) == 0) ?
    (countDivider = itemsArray.length / slideCount) :
    (countDivider = Math.floor(itemsArray.length / slideCount) + 1);

  // check direction of the carousel slider
  useEffect(() => {
    goRight ? setCurrentSlide(-(countDivider - 1)) : setCurrentSlide(0);
  }, [goRight])



  const slideInterval: { current: NodeJS.Timer | null } = useRef(null);


  const nextSlide = () => {
    if (goRight) {
      currentSlide < 0 ?
        setCurrentSlide(currentSlide => currentSlide + 1) :
        setCurrentSlide(-(countDivider - 1));
    } else {
      currentSlide < countDivider - 1 ?
        setCurrentSlide(currentSlide => currentSlide + 1) :
        setCurrentSlide(0);
    }
  }

  const prevSlide = () => {
    if (goRight) {
      currentSlide > -(countDivider - 1) ?
        setCurrentSlide(currentSlide => currentSlide - 1) :
        setCurrentSlide(0);
    } else {
      currentSlide > 0 ?
        setCurrentSlide(currentSlide => currentSlide - 1) :
        setCurrentSlide(countDivider - 1);
    }
  }

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
    }
  }

  // handle auto slide
  useEffect(() => {
    if (autoSlide) {
      startSlideTimer();

      return () => stopSlideTimer();
    }
  }, [itemsArray]);

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      if (goRight) {
        setCurrentSlide(currentSlide => currentSlide < 0 ? currentSlide + 1 : -(countDivider - 1));
      } else {
        setCurrentSlide(currentSlide => currentSlide < countDivider - 1 ? currentSlide + 1 : 0)
      }
    }, 5000);
  }


  return (
    <section className="carousel">
      <div className="carousel__container"
        style={{
          transform: `translateX(${goRight ?
            ((currentSlide / (countDivider - 1)) * ((countDivider - 1) * 100)) :
            -((currentSlide / (countDivider - 1)) * ((countDivider - 1) * 100))}%)`
        }}>
        {itemsArray}
      </div>
      <figure className="arrow-right" onClick={nextSlide}>
        <ArrowRight />
      </figure>
      <figure className="arrow-left" onClick={prevSlide}>
        <ArrowLeft />
      </figure>
    </section>
  )
}

export default Carousel
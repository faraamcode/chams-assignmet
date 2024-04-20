"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Projet1 from "../../../assets/project-1.jpeg"
import Project2 from "../../../assets/project-2.jpeg"
import Project3 from "../../../assets/project-3.jpeg"
import Project4 from "../../../assets/project-4.jpeg"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Hero from './hero'

// import 'react-multi-carousel/lib/styles.css';

const Corousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <Hero/>
          <Hero/>
          <Hero/>
          <Hero/>
        </div>
      </div>
    )
}

export default Corousel

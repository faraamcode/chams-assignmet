import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
interface HeroInterface {
  heroClass: string;
  heroHeading: string;
  heroText: string;
  btnText: string;
  btnUrl: string;
}
const Hero = ({ heroClass, heroHeading, heroText, btnText, btnUrl }: HeroInterface) => {
  return (
    <header className={heroClass + " embla__slide"}>
      <div className="section-center hero-center">
        <article className="hero-info">
          {/* <!-- <div className="underline"></div> --> */}
          <h1>{heroHeading}</h1>
          <h4>{heroText}</h4>
          <Link href={btnUrl} className="btn hero-btn">{btnText}</Link>
          {/* <!-- social icons --> */}
          <ul className="social-icons hero-icons">
            <li>
              <Link href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-squarespace"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-behance"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </article>

      </div>
    </header>
  )
}

export default Hero
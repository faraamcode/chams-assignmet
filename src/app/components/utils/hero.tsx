import React from 'react'
import Link from 'next/link'

const Hero = () => {
    return (
        <header className="hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            {/* <!-- <div className="underline"></div> --> */}
            <h1>Wonder Sprout Academy</h1>
            <h4>Empowering Young Minds for a Brighter Future</h4>
            <Link href="/" className="btn hero-btn">contact us</Link>
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
          {/* <!-- <article className="hero-img">
            <Image width={100} height={100} src="./images/hero-img.jpeg" className="hero-photo" alt="john doe" />
          </article> --> */}
        </div>
      </header>
    )
}

export default Hero
import Link from 'next/link'
import React from 'react'

const HeroCard = () => {
  return (
    <div className="section-center">
      <article className="hero-info">
        <h1>Wonder Sprout Academy</h1>
        <h4>Empowering Young Minds for a Brighter Future</h4>
        <Link href="/" className="btn hero-btn">contact us</Link>
        {/* <!-- social icons --> */}
        <ul className="social-icons hero-icons">
          <li>
            <Link href="https://www.twitter0932.com" className="social-icon">
              <i className="fab fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link href="https://www.twi93983tter.com" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </Link>
          </li>
          <li>
            <Link href="https://www.twi4983tter.com" className="social-icon">
              <i className="fab fa-squarespace"></i>
            </Link>
          </li>
          <li>
            <Link href="https://www.twit4983ter.com" className="social-icon">
              <i className="fab fa-behance"></i>
            </Link>
          </li>
          <li>
            <Link href="https://www.twit88483ter.com" className="social-icon">
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
        </ul>
      </article>
      {/* <!-- <article className="hero-img">
      <Image width={100} height={100} src="./images/hero-img.jpeg" className="hero-photo" alt="john doe" />
    </article> --> */}
    </div>
  )
}

export default HeroCard
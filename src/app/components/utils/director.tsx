import React from 'react'
import Link from 'next/link'

const Director = () => {
  return (
    <section className="section about">

      <div className="section-center about-center">
        {/* <!-- about img --> */}
        <article className="about-img">
          {/* <img
            src="./images/about-img.jpeg"
            className="hero-photo"
            alt="about img"
          /> */}
        </article>
        {/* <!-- about info --> */}
        <article className="about-info">
          {/* <!-- section title --> */}
          <div className="section-title about-title">
            <h2>WELCOME TO WONDER SPROUT ACADEMY</h2>
            {/* <!-- <div className="underline"></div> --> */}
          </div>
          {/* <!--end of section title --> */}
          <p>
          Welcome to Wonder Sprout Academy, where learning and exploration flourish. Our academy is staffed by experienced Montessori teachers and furnished with a diverse assortment of authentic, top-notch Montessori materials. At Wonder Sprout, we believe that every child deserves time, love, and trust from us.
Our mission is to prepare children for a life filled with imagination and knowledge. To achieve this, we are committed to providing a safe, nurturing, happy, challenging, and structured learning environment. Our goal is to ensure that every child not only reaches their full potential but exceeds it.
Embracing core values such as responsibility, respect, independence, curiosity, integrity, and imagination, we strive to develop the full potential of each individual student.
          </p>
          <Link href="/" className="btn">Read more...</Link>
        </article>

      </div>
    </section>
  )
}

export default Director

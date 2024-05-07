import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TeacherImage from "../../../assets/teacher.jpg"

const Director = () => {
  return (
    <section className="section">
      <div className='section-title'>
        <h2>Lorem, ipsum.</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, id?</p>
      </div>
      <div className="section-full">
        <article className="article-img">
          <Image
          // width={100}
          // height={100}
            src={TeacherImage}
            className="article-photo"
            alt="about img"
          />
        </article>
        <article className="article-info">
          {/* <!-- section title --> */}
          <div className="section-title about-title">
            <h2>WELCOME TO WONDER SPROUT ACADEMY</h2>
            {/* <!-- <div className="underline"></div> --> */}
          </div>
          {/* <!--end of section title --> */}
          <p>
          Welcome to Wonder Sprout Academy, where learning and exploration flourish. Our academy is staffed by experienced Montessori teachers and furnished with a diverse assortment of authentic, top-notch Montessori materials. At Wonder Sprout, we believe that every child deserves time, love, and trust from us.
          </p>
          <Link href="/" className="btn">Read more...</Link>
        </article>
      </div>
      <div className="section-full section-reverse">
        <article className="article-img">
          <Image
          // width={100}
          // height={100}
            src={TeacherImage}
            className="article-photo"
            alt="about img"
          />
        </article>
        <article className="article-info">
          {/* <!-- section title --> */}
          <div className="section-title about-title">
            <h2>WELCOME TO WONDER SPROUT ACADEMY</h2>
            {/* <!-- <div className="underline"></div> --> */}
          </div>
          {/* <!--end of section title --> */}
          <p>
          
          Welcome to Wonder Sprout Academy, where learning and exploration flourish. Our academy is staffed by experienced Montessori teachers and furnished with a diverse assortment of authentic, top-notch Montessori materials. At Wonder Sprout, we believe that every child deserves time, love, and trust from us.
          </p>
          <Link href="/" className="btn">Read more...</Link>
        </article>
      </div>
    </section>
  )
}

export default Director

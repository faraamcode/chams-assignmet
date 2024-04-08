import React from 'react'

const About = () => {
  return (
    <section className="section about">
      <div className="section-title">
        <h2>About us</h2>
        {/* <div className="underline"></div> */}
      </div>

      <div className="section-center about-center">
        {/* <!-- about img --> */}
        <article className="about-img">
          <img
            src="./images/about-img.jpeg"
            className="hero-photo"
            alt="about img"
          />
        </article>
        {/* <!-- about info --> */}
        <article className="about-info">
          {/* <!-- section title --> */}
          <div className="section-title about-title">
            <h2>Our mission</h2>
            {/* <!-- <div className="underline"></div> --> */}
          </div>
          {/* <!--end of section title --> */}
          <p>
            At Wonder Sprout Academy, we are committed to providing a nurturing and
            inclusive educational learning environment where every child is valued and
            supported. Our mission is to empower our pupils with the knowledge, skills, and
            attitudes necessary to become successful in life. We strive to develop well-rounded
            individuals who are confident, creative, and curious learners. We also strive to
            foster a love of learning, creativity, critical thinking, and social-emotional
            collaboration through an engaging curriculum that meets the needs of each
            individual pupil.
          </p>
          <div className="section-title about-title">
            <h2>Our vission</h2>
            {/* <!-- <div className="underline"></div> --> */}
          </div>
          <p>
            Our vision at Wonder Sprout Academy is to be a leading educational institution
            that empowers pupils to become successful, well-rounded individuals who are
            confident, creative, and curious learners.
          </p>
          <a href="about.html" className="btn">Read more...</a>
        </article>
      </div>
    </section>
  )
}

export default About

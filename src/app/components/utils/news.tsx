import React from 'react'

const News = () => {
  return (
    <section className="section blog">
      {/* <!-- section title --> */}
      <div className="section-title">
        <h2>News</h2>
      </div>
      {/* <!--end of section title --> */}
      <div className="section-center blog-center">
        {/* <!-- single article --> */}
        <div className="card">
          {/* <!-- front of the card --> */}
          <div className="card-side card-front">
            <img src="./project-1.jpeg" alt="" />
            <div className="card-info">
              <h4>article title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <div className="card-footer">
                {/* <img src="./hero-img-small.jpeg" alt="author image" /> */}
                <p>7 min read</p>
              </div>
            </div>
          </div>
          {/* <!-- card back  --> */}
          <div className="card-side card-back">
            <button className="btn">read more</button>
          </div>
        </div>
        {/* <!-- end of single article --> */}
        {/* <!-- single article --> */}
        <div className="card">
          {/* <!-- front of the card --> */}
          <div className="card-side card-front">
            <img src="./project-2.jpeg" alt="" />
            <div className="card-info">
              <h4>article title</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </p>
              <div className="card-footer">
                {/* <img src="./hero-img-small.jpeg" alt="author image" /> */}
                <p>7 min read</p>
              </div>
            </div>
          </div>
          {/* <!-- card back  --> */}
          <div className="card-side card-back">
            <button className="btn">read more</button>
          </div>
        </div>
        {/* <!-- end of single article --> */}
        {/* <!-- single article --> */}
        <div className="card">
          {/* <!-- front of the card --> */}
          <div className="card-side card-front">
            <img src="./project-3.jpeg" alt="" />
            <div className="card-info">
              <h4>article title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <div className="card-footer">
                {/* <img src="./hero-img-small.jpeg" alt="author image" /> */}
                <p>7 min read</p>
              </div>
            </div>
          </div>
          {/* <!-- card back  --> */}
          <div className="card-side card-back">
            <button className="btn">read more</button>
          </div>
        </div>
        {/* <!-- end of single article --> */}
        {/* <!-- single article --> */}
        <div className="card">
          {/* <!-- front of the card --> */}
          <div className="card-side card-front">
            <img src="./project-4.jpeg" alt="" />
            <div className="card-info">
              <h4>article title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <div className="card-footer">
                {/* <img src="./hero-img-small.jpeg" alt="author image" /> */}
                <p>7 min read</p>
              </div>
            </div>
          </div>
          {/* <!-- card back  --> */}
          <div className="card-side card-back">
            <button className="btn">read more</button>
          </div>
        </div>
        {/* <!-- end of single article --> */}
      </div>
    </section>
  )
}

export default News

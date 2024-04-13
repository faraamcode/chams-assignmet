import React from 'react'
import Projet1 from "../../../assets/project-1.jpeg"
import Project2 from "../../../assets/project-2.jpeg"
import Project3 from "../../../assets/project-3.jpeg"
import Project4 from "../../../assets/project-4.jpeg"
import Image from "next/image"
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
            <Image width={100} height={100} src={Projet1} alt="" />
            <div className="card-info">
              <h4>article title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <div className="card-footer">
                {/* <Image width={100} height={100} src="./hero-img-small.jpeg" alt="author image" /> */}
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
            <Image width={100} height={100} src={Project2} alt="" />
            <div className="card-info">
              <h4>article title</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </p>
              <div className="card-footer">
                {/* <Image width={100} height={100} src="./hero-img-small.jpeg" alt="author image" /> */}
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
            <Image width={100} height={100} src={Project3} alt="" />
            <div className="card-info">
              <h4>article title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <div className="card-footer">
                {/* <Image width={100} height={100} src="./hero-img-small.jpeg" alt="author image" /> */}
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
            <Image width={100} height={100} src={Project4} alt="" />
            <div className="card-info">
              <h4>article title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <div className="card-footer">
                {/* <Image width={100} height={100} src="./hero-img-small.jpeg" alt="author image" /> */}
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

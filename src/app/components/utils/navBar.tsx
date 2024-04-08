"use client"
import Link from 'next/link'
import React, {useRef, useEffect, useState} from 'react'
import Image from 'next/image';
import SchoolLogo from "../../../assets/logo.png"
import NavBarLink from './navBarLink';


const NavBar = () => {
  const navbar:any =  useRef(null);
  // const navBtn =  useRef(null)
  // const closeBtn =useRef(null) 
  const sidebar:any = useRef(null) 
  // const date = document.querySelector("#date");

  useEffect(()=>{
    const handleScroll = () => {
      // Your scroll event handling logic here
      if (window.pageYOffset > 80) {
        navbar?.current?.classList.add("navbar-fixed");
      } else {
        navbar?.current?.classList.remove("navbar-fixed");
      }
    
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);
    
    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [])

  const closeSideBar = ()=>{
    sidebar?.current?.classList?.remove("show-sidebar")
  }
  const openSideBar = ()=>{
    sidebar?.current?.classList?.add("show-sidebar")
  }


// show sidebar
// navBtn.addEventListener("click", function () {
//   sidebar.classList.add("show-sidebar");
// });
// closeBtn.addEventListener("click", function () {
//   sidebar.classList.remove("show-sidebar");
// });
// set year
// date.innerHTML = new Date().getFullYear();
    return (
        <>
        <nav className="nav" ref={navbar} id="nav">
        <div className="nav-center">
          {/* <!-- nav header --> */}
          <div className="nav-header">
            <Image src={SchoolLogo} width="50" className="nav-logo" alt="nav logo" />
            <button className="nav-btn" onClick={openSideBar} id="nav-btn">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- nav-links --> */}
          <ul className="nav-links">
            <li>
              <a href="index.html">home</a>
            </li>
            <li>
              <a href="about.html">about us</a>
            </li>
            <li>
              <a href="projects.html">Admission</a>
            </li>
            <li>
              <a href="contact.html">contact us</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!-- end of navbar --> */}
      {/* <!-- sidebar --> */}
      <aside className="sidebar"  ref={sidebar} id="sidebar">
        <div>
          <button className="close-btn"  onClick={closeSideBar} id="close-btn">
            <i className="fas fa-times"></i>
          </button>
          {/* <!-- nav-links --> */}
          <ul className="sidebar-links">
            <li>
              <a href="index.html">home</a>
            </li>
            <li>
              <a href="about.html">about us</a>
            </li>
            <li>
              <a href="projects.html">Admission</a>
            </li>
            <li>
              <a href="contact.html">contact us</a>
            </li>
          </ul>
          {/* <!-- social icons --> */}
          <ul className="social-icons">
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-squarespace"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      {/* <!-- end of sidebar --> */}
      {/* <!-- header --> */}
      </>
    )
}

export default NavBar
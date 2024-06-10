"use client"
import Link from 'next/link'
import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image';
import SchoolLogo from "../../../assets/logo.png"
import NavBarLink from './navBarLink';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io"
import DropDown from './dropDown';


const NavBar = () => {
  const navbar: any = useRef(null);
  const sidebar: any = useRef(null)
  const [height, setHeight] = useState(0)
  const [left, setLeft] = useState(0)


  useEffect(() => {
    const handleScroll = () => {
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

  const closeSideBar = () => {
    sidebar?.current?.classList?.remove("show-sidebar")
  }
  const openSideBar = () => {
    sidebar?.current?.classList?.add("show-sidebar")
  }

  const openDropDown = (event: any) => {
    const leftPosition = event.currentTarget.getBoundingClientRect().left;
    setHeight(150);
    setLeft(leftPosition)
  }
  const closeDropDown = () => {
    setHeight(0);
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
              <FaBars />
            </button>
          </div>
          {/* <!-- nav-links --> */}
          <ul className="nav-links">
            <li onClick={closeDropDown}>
              <Link href="/">home</Link>
            </li>
            <li onClick={openDropDown}>
              <Link href="/about">about us</Link>
              <IoIosArrowDown />
            </li>
            <li onClick={openDropDown}>
              <Link href="/admission" >Admission</Link>
              <IoIosArrowDown />
            </li>
            <li onClick={openDropDown}>
              <Link href="/programs">Programs</Link>
              <IoIosArrowDown />
            </li>
            <li onClick={closeDropDown}>
              <Link href="/contact">contact us</Link>
            </li>
          </ul>
        </div>
        <DropDown left={left} height={height} closeDropDown={closeDropDown} />
      </nav>
      {/* <!-- end of navbar --> */}
      {/* <!-- sidebar --> */}
      <aside className="sidebar" ref={sidebar} id="sidebar">
        <div>/

          <button className="close-btn" onClick={closeSideBar} id="close-btn">
            <IoMdClose />
          </button>
          {/* <!-- nav-links --> */}
          <ul className="sidebar-links">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/">about us</Link>
            </li>
            <li>
              <Link href="/">Admission</Link>
            </li>
            <li>
              <Link href="/">contact us</Link>
            </li>
          </ul>
          {/* <!-- social icons --> */}
          <ul className="social-icons">
            <li>
              <Link href="https://www.tw9938itter.com" className="social-icon">
                <i className="fab fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.twi949tter.com" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.twit9403ter.com" className="social-icon">
                <i className="fab fa-squarespace"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.twi909tter.com" className="social-icon">
                <i className="fab fa-behance"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.t9099witter.com" className="social-icon">
                <i className="fab fa-instagram"></i>
              </Link>
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
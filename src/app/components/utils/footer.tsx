import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer">
            {/* <!-- social icons --> */}
            {/* <ul className="nav-links">
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
            </ul> */}
            <ul className="social-icons">
                <li>
                    <Link href="https://www.twitter.com" className="social-icon">
                        <FaFacebook />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.twitter.com" className="social-icon">
                        <FaTwitter />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.twitter.com" className="social-icon">
                        <FaInstagram />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.twitter.com" className="social-icon">
                        <FaLinkedin />
                    </Link>
                </li>
            </ul>
            <div className='courtesy'>
                <p>&copy; <span id="date">{year}</span> wonder sprout academy. all rights reserved</p>

            </div>
        </footer>

    )
}

export default Footer
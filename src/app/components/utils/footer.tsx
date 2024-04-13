import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            {/* <!-- social icons --> */}
            <ul className="social-icons">
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

            <p>&copy; <span id="date"></span> john doe. all rights reserved</p>
        </footer>

    )
}

export default Footer
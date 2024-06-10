import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

function ContactDetails() {
    return (
        <div className='contact-details-container'>
            <div className="detail phone-number">
                <Link href="">
                    <h5>+234 814 370 1719</h5>
                </Link>
            </div>
            <div className="detail address">
                <h5>15C unity estate, proffesor raji street, pipeline road, tipper garage ilorin</h5>
            </div>
            <div className="detail social-media">
                <Link href="">
                    <FaFacebook />
                </Link>
                <Link href="">
                    <FaInstagram />
                </Link>
                <Link href="">
                    <FaLocationDot />
                </Link>
                <Link href="">
                    <FaWhatsapp />
                </Link>
            </div>

        </div>
    )
}

export default ContactDetails

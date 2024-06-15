"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import Cart from './cart'
import { AppContext } from '../context/provider';

function Footer() {
    const { openCart } = useContext(AppContext);

    return (
        <>
            <div className='footer w-full flex justify-between'>
                <div className="footer-info basis2/6 flex flex-col">
                    <h1>Logo</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nisi mollitia ullam sit soluta eius tempore officiis pariatur quaerat. Maiores officiis alias quo natus nobis, saepe veritatis officia perspiciatis! Quasi!</p>
                </div>
                <div className="single-footer basis-1/6">
                    <h4>Company</h4>
                    <div className="footer-links">
                        <Link href="/">Contact us</Link>
                    </div>
                </div>
                <div className="single-footer basis-1/6">
                    <h4 className="mt-0">Explore</h4>
                    <div className="footer-links">
                        <Link href="/">Market place</Link>
                        <Link href="/">Sample storefront</Link>
                        <Link href="/">Bill payment</Link>
                    </div>
                </div>
                <div className="single-footer basis-1/6">
                    <h4>Legacy</h4>
                    <div className="footer-links">
                        <Link href="/">Legacy note</Link>
                        <Link href="/">Terms and condition</Link>
                    </div>
                </div>
                <div className="single-footer basis-1/6">
                    <h4>Contact us</h4>
                    <div className="footer-links">
                        <div className="footer-social flex gap-4">
                            <Link href="/"> <FaFacebook /></Link>
                            <Link href="/"> <FaInstagram /></Link>
                            <Link href="/"> <FaYoutube /></Link>
                        </div>
                        <Link href="/">This address</Link>
                        <Link href="/">info@alii.com</Link>
                        <Link href="/">00 000 0000 00</Link>
                    </div>
                </div>
            </div>
            {openCart && <Cart />}
        </>
    )
}

export default Footer

import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import HeroButton from './buttons';

function NewsLetter() {
    return (
        <div className='newsletter mt-12'>
            <h2>News letter</h2>
            <p>Be the first person to know about discounts, offers, and event weekly on your mailbox. unsubscribe anytime with one click.</p>

            <div className="newsletter-input h-14 flex">
                <FaRegEnvelope width={100} height={100} className='envelop' />
                <input type="text" placeholder='Enter your email' className="newletter-input flex-1 ml-2 outline-none" />
                <button className='subscribe-btn'>subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter

import Link from 'next/link'
import React from 'react'
import HeroButton from './buttons'
import TransparentButton from './transparentButton'

function TopBar() {
    return (
        <div className="w-full h-16 topbar flex gap-8 py-8">
            <div className="logo basis-1/5 flex justify-start items-center">
                <Link href="/">
                    <h2>
                        Logo
                    </h2>
                </Link>
            </div>
            <div className="nav-links basis-3/5  flex justify-between items-center">
                <Link className='nav-link capitalize ' href="/">Home</Link>
                <Link className='nav-link capitalize ' href="/">Market place</Link>
                <Link className='nav-link capitalize ' href="/">Bill payment</Link>
                <Link className='nav-link capitalize ' href="/">Contact</Link>
                <Link className='nav-link capitalize ' href="/">FAQS</Link>
            </div>
            <div className="nav-buttons basis-1/5 flex items-center justify-between gap-4">
                <TransparentButton />
                <HeroButton />
            </div>
        </div>
    )
}

export default TopBar



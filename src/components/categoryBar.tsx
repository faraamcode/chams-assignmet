"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import HeroButton from './buttons'
import TransparentButton from './transparentButton'
import RoundButton from './roundButton'
import CartButton from './cartButton'
import { AppContext } from '../context/provider'

function CategoryBar() {
    const { cart } = useContext(AppContext)
    console.log("my cart", cart)
    return (
        <div className="category w-full h-16 category-bar flex gap-8 py-8">
            <div className="category-links basis-4/5  flex justify-between items-center">
                <Link className='nav-link capitalize ' href="/">all categories</Link>
                <Link className='nav-link capitalize ' href="/">books</Link>
                <Link className='nav-link capitalize ' href="/">events</Link>
                <Link className='nav-link capitalize ' href="/">design</Link>
                <Link className='nav-link capitalize ' href="/">personal development</Link>
                <Link className='nav-link capitalize ' href="/">business</Link>
                <Link className='nav-link capitalize ' href="/">art</Link>
            </div>
            <div className="category-buttons basis-1/5 flex items-center justify-between gap-4">
                <TransparentButton text='bill payment' />
                <RoundButton />
                <CartButton total={cart?.length || 0} />
            </div>
        </div>
    )
}

export default CategoryBar



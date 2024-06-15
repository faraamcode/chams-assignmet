"use client"
import React, { useContext } from 'react'
import TransparentButton from './transparentButton'
import HeroButton from './buttons'
import { AppContext } from '../context/provider'

function Cart() {
    const { cart, toggleCart } = useContext(AppContext)

    return (
        <div className="cart-section flex justify-center">
            <div className="cart-container shadow flex flex-col">
                <div className="cart-title basis-1/6">
                    <h4>My cart</h4>
                </div>
                <div className="cart-list scroll-smooth overflow-y-scroll basis-3/6 flex flex-col gap-4">
                    {
                        cart?.map((item: any, index: number) => (

                            <div className="cart-item" key={index}>
                                <h5>{item?.type}</h5>
                                <div className='flex justify-between'>
                                    <div>{item?.network}</div>
                                    <div>{item?.amount}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="total  flex justify-between basis-1/6">
                    <p>Total price: ₦{cart?.reduce((accumulator, item) => {
                        return accumulator + Number(item?.amount) || 0;
                    }, 0) || 0}</p>
                    <p>Total items: {cart?.length || 0}</p>
                </div>
                <div className="cart-button-container  flex justify-center basis-1/6">
                    <HeroButton text="Checkout" handleClick={() => toggleCart()} />
                </div>
            </div>

        </div>
    )
}

export default Cart

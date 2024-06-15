import React, { useContext } from 'react'
import DashboardTitle from './dashboardTitle'
import Networks from './networks'
import TransparentButton from './transparentButton'
import HeroButton from './buttons'
import { AppContext } from '../context/provider'

function MobileData() {
    const { form, network, handleForm, addToCart, activeTab, toggleCart } = useContext(AppContext);
    return (
        <div className="tab-detail-container pt-8">
            <DashboardTitle paragraph='Please enter your details.' heading='Buy mobile data' />
            <Networks />
            <input name='phone' value={form?.phone || ""} onChange={(e: any) => handleForm(e)} className='input focus:outline-none focus:ring focus:border-blue-500 mt-4 w-full' type='text' placeholder='phone number' />
            <input name='amount' value={form?.amount || ""} onChange={(e: any) => handleForm(e)} className='input focus:outline-none focus:ring focus:border-blue-500 mt-4 w-full' type='number' placeholder='amount' />
            <input name='email' value={form?.email || ""} onChange={(e: any) => handleForm(e)} className='input focus:outline-none focus:ring focus:border-blue-500 mt-4 w-full' type='email' placeholder='email' />
            <div className="button-wrapper w-full flex justify-between mt-8">
                <TransparentButton handleClick={() => addToCart({ ...form, network, type: activeTab })} text='add to cart' />
                <HeroButton text='procceed to checkout' handleClick={() => toggleCart()} />
            </div>
        </div>
    )
}

export default MobileData

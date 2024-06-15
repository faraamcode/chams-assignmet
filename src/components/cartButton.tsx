import React from 'react'
import { IoCartOutline } from "react-icons/io5";
interface ICartButton {
    total: number;
}
function CartButton({ total }: ICartButton) {

    return (
        <button className="cart-btn flex items-center justify-center gap-4">
            <IoCartOutline />
            <span>My Cart</span>
            <div className='cart-number flex items-center justify-center'>{total}</div>
        </button>
    )
}

export default CartButton
import Link from 'next/link'
import React from 'react'
interface NavBarLinkInterface {
    text: string
    active: boolean
    url: string
}



const NavBarLink = ({ text, active, url }: NavBarLinkInterface) => {
    return (
        <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="m-1 text-white text-4xl">{text}</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
    )
}

export default NavBarLink
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
                <Link href="/">
                    <li>Item 1</li>

                </Link>
                <Link href="/">
                    <li>Item 2</li>

                </Link>
            </ul>
        </div>
    )
}

export default NavBarLink
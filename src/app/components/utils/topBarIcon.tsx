import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons';


interface IconWithTextProps {
    Icon: IconType;
    text: string;
}
const TopBarIcon = ({ Icon, text }: IconWithTextProps) => {
    return (
        <div className="ml-10 flex gap-2 items-center" >
            <Link href="/">
                <Icon />
            </Link>
            <span>{text}</span>
        </div>
    )
}

export default TopBarIcon
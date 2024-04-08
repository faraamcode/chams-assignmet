import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import Link from 'next/link'
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import TopBarIcon from './topBarIcon';


const TopBar = () => {
    return (
        <div className="h-0 overflow-hidden md:h-8 w-full bg-blue-500">
            <div className="w-full h-full px-36 py-2 flex justify-between">

                <div className="flex">
                    <TopBarIcon Icon={CiLocationOn} text='4 adetola street Ilorin'/>
                </div>
                <div className="flex justify-between">
                    
                    <TopBarIcon Icon={FaPhoneAlt} text='+234 8100 000 000'/>
                    <TopBarIcon Icon={MdOutlineMail} text='sproutofwonders@gmail.com'/>
                    <TopBarIcon Icon={FaFacebookF} text='wondersprout'/>
                        

                </div> 

            </div>
        </div>
    )
}

export default TopBar

import React from 'react'
import profile from '/icons/profile.svg'
import { Link } from 'react-router-dom'

export function Header({ children, style }) {
    return (
        <div className='flex items-center justify-between w-full'>
            <div className={`flex items-center justify-center ${style}`}>
                {children}
            </div>

            <ul className="flex justify-center items-center gap-[37px] font-Vazirmatn ">
                <li>Contact Us</li>
                <li>FAQ</li>
                <Link to="/profile"> <img src={profile} alt='profile icon' className="w-[30px] h-[30px] object-contain" /></Link>
            </ul>
        </div>
    )
}

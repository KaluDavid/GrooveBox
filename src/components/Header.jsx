import React from 'react'
import { ImSearch } from "react-icons/im";
import profile from '/icons/profile.svg'

export function Header() {
    return (
        <div className='flex items-center justify-between w-full'>
            <div className='flex items-center justify-center w-[40%]'>
                <span className="*:scale-x-[-1] mr-[-28px]">
                    <ImSearch />
                </span>
                <input type="search" name="search" id="" placeholder='Search For Music, Artists,...' className=' rounded-lg bg-darkGray w-full px-4 py-2 text-opacity-40 pl-[35px] ' />
            </div>

            <ul className="flex justify-center items-center gap-[37px] font-Vazirmatn ">
                <li>About Us</li>
                <li>Contact</li>
                <img src={profile} alt='profile icon' className="w-[30px] h-[30px] object-contain" />
            </ul>
        </div>
    )
}

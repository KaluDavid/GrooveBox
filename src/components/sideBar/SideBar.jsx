import React from 'react'
import Logo from '../Logo'
import { BiAlbum } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { TbLogout } from "react-icons/tb";
import { MdOutlineQueueMusic } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import profile from '/icons/profile.svg'

export function SideBar() {

    function handleLogout() {

    }


    return (
        <div className='shad border-r-2 border-r-pink h-full w-auto pr-[42px] pl-[64px] py-[32px] left-0 flex flex-col gap-[30px] text-white font-medium fixed z-10 [&_small]:text-pink [&_small] [&_small]:text-[12px] [&_small]font-normal [&_span]:flex [&_span]:items-center [&_span]:gap-1 [&_div]:w-full '>
            <Logo />
            <div className="flex flex-col items-start gap-[24px] ">
                <small>Menu</small>
                <NavLink to='/home' className={({ isActive }) => isActive ? "active" : 'hove'}>
                    <span><IoHomeOutline />Home</span>
                </NavLink>
                <NavLink to="/album" className={({ isActive }) => isActive ? "active" : 'hove'}> <span><BiAlbum />Albums</span>
                </NavLink>
            </div>

            <div className="flex flex-col items-start gap-[24px] my-[20px]">
                <small>Library and favorite</small>
                <NavLink to='/favorite' className={({ isActive }) => isActive ? "active" : 'hove'}><span> <GoHeart />Your favorites</span>
                </NavLink>
                <NavLink to='*' className={({ isActive }) => isActive ? "active" : 'hove'}>
                    <span><MdOutlineQueueMusic />Your playlist</span>
                </NavLink>
            </div>

            <div className="flex flex-col items-start gap-[24px]">
                <small>General</small>
                <NavLink to="/" className="hove">  <span onClick={handleLogout}><TbLogout />Logout</span></NavLink>
                <NavLink to='/profile' className={({ isActive }) => isActive ? "active" : 'hove'}><span>  <img src={profile} alt='profile icon' className="w-[20px] h-[20px] object-contain" /> Profile</span>
                </NavLink>
            </div>
        </div>
    )
}

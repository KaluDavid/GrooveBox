import React from 'react'
import Logo from '../Logo'
import { BiAlbum } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { TbLogout } from "react-icons/tb";
import { MdOutlineQueueMusic } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

export function SideBar() {

    function handleLogout() {

    }


    return (
        <div className=' flex flex-col gap-[24px] text-white font-medium left-11 fixed z-10 [&_small]:text-pink [&_small] [&_small]:text-[12px] [&_small]font-normal [&_span]:flex [&_span]:items-center [&_span]:gap-1 [&_div]:w-full '>
            <Logo />
            <div className="flex flex-col items-start gap-[24px] hove">
                <small>Menu</small>
                <NavLink to='/' className={({ isActive }) => isActive ? "active" : ''}>  <span><IoHomeOutline />Home</span> </NavLink>
                <NavLink to="/album" className={({ isActive }) => isActive ? "active" : ''}> <span><BiAlbum />Albums</span></NavLink>
            </div>
            <div className="flex flex-col items-start gap-[24px] hove">
                <small>Library and favorite</small>
                <span><CiClock2 />Recently Added</span>
                <span> <GoHeart />Your favorites</span>
                <span><MdOutlineQueueMusic />Your playlist</span>
            </div>
            <div className="flex flex-col items-start gap-[24px] hove">
                <small>General</small>
                <NavLink to="/landing" >  <span onClick={handleLogout}><TbLogout />Logout</span></NavLink>
            </div>
        </div>
    )
}

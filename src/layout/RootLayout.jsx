import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideBar } from '../components/sideBar/SideBar'
import { Footer } from '../components/footer/Footer'

export function RootLayout() {
    return (
        <div className='flex bg-bgColor w-full text-white justify-center gap-[10px] overflow-x-hidden'>
            <div className='shad border-r-2 border-r-pink  h-auto w-[300px]  pr-[42px] pl-[64px] py-[32px] relative'><SideBar /></div>
            <div className='w-[80%] pt-[42px] h-auto flex flex-col gap-[100px]'>
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}
{/* <div className='shad border-r-2 border-r-pink  h-screen w-[270px] pr-[32px] pl-[64px] py-[48px]'> */ }
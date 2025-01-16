import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { SideBar } from '../components/sideBar/SideBar'
import { Footer } from '../components/footer/Footer'
import { ErrorPage } from '../pages/errorPage/ErrorPage'

export function RootLayout() {
    const location = useLocation()
    return (
        <>
            {location.pathname !== "/*" ? (
                < div className='flex bg-bgColor w-full text-white justify-center gap-[10px] overflow-x-hidden h-screen ' >
                    <div className=' w-[300px]  relative z-20'>
                        <SideBar />
                    </div>
                    <div className='w-[80%] h-full flex flex-col gap-[100px] justify-between'>
                        <Outlet />
                        <Footer />
                    </div>
                </div >
            ) : (
                <ErrorPage />
            )}
        </>
    )
}

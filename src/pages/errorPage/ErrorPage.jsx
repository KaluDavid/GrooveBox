import React, { useEffect } from 'react'
import moon from "/imgs/moon.png"
import Vector from "/imgs/Vector.png"
import astronaut from "/imgs/Astronaut.png"
import earth from "/imgs/earth.svg"
import Fog1 from "/imgs/Fog1.png"
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom'
export function ErrorPage() {
    useEffect(() => {
        document.title = ("404 Page 🚫")
    }, [])
    const navigate = useNavigate()
    return (
        <div className="bg-bgColor font-Concert bg-[url('./imgs/Stars.png')] flex items-center justify-center bg-repeat bg-cover w-full h-screen overflow-hidden text-errorColor relative">
            <figure className='flex items-center'>
                <img src={moon} alt="moon" className=' animate-pulse ml-[-27%] mt-[-40%]' />
                <img src={Vector} alt="Vector" className='ml-[-50%] w-[40%]' />
            </figure>
            <div className="flex items-center flex-col leading-[6rem] [&_h1]:text-[120px] [&_h2]:text-[64px]  absolute top-[20%]">
                <h1>404</h1>
                <h2>Page not found!</h2>
            </div>

            <div className="flex absolute bottom-[20%] cursor-pointer  items-center gap-4 text-white text-[36px] " onClick={() => navigate(-1)}>
                <p className='p-3 bg-white absolute left-[60px] w-[40%] animate-ping'></p>
                <GoArrowLeft /> <b>Back</b>
            </div>
            <figure className='flex items-center flex-col [&_img]:object-contain'>
                <img src={astronaut} alt="astronaut" className='absolute top-0 right-6 w-[20%]' />
                <img src={Fog1} alt="Fog1" className='relative right-6' />
                <img src={earth} alt="earth" className='absolute bottom-[12%] right-[10%] animate-spin' />
            </figure>

        </div>
    )
}

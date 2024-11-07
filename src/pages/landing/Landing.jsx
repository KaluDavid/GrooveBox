import React from 'react'
import Nav from './Nav'
import { Button } from '../../components/Button'
export function Landing() {
    return (
        <>
            <div className="relative py-6 px-10 flex items-center flex-col bg-[url('./istockphoto-185406129-612x612.jpg')] bg-no-repeat bg-cover bg-center w-full h-screen">
                <div className="absolute inset-0 bg-[black] opacity-70"></div>
                <div className="relative flex items-center justify-center gap-[95px] flex-col w-full">
                    <Nav />
                    <div className="flex flex-col gap-[35px] items-center justify-center text-center">
                        <div className="flex flex-col gap-[16px] items-center justify-center ">
                            <h1 className='text-[132px] font-normal leading-[140px] font-Anton  welcome-gradient'>
                                EPIC MUSIC <br /> EXPERIENCE
                            </h1>
                            <p className='font-poppins font-normal text-xl text-[#B4BABC]'>
                                We have the perfect music with free licensing for your <br />creativity. Discover the possibilities now!
                            </p>
                        </div>

                        <Button style="text-white bg-pink w-[10pc] border-pink shadow-landing font-medium pb-[6px]" linkTo="/Login">Start Free Now </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

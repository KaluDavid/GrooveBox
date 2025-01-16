import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Button } from '../../components/Button'

export function Landing() {
    const [token, setToken] = useState("")

    const CLIENT_ID = "903161a5be974d9d9b1697a88d8c1111"
    const REDIRECT_URI = "http://localhost:5173"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"


    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token");

        if (!token && hash) {
            token = hash.substring(1).split("&").find(ele => ele.startsWith("access_token")).split("=")[1]
            console.log(token)
        }
        setToken(token);

        return function () {
            document.title = "Welcome"
            // window.location.href = '/home'

        }
    }, [])


    return (
        <>
            <div className="relative  overflow-hidden py-6 px-10 flex items-center justify-center flex-col bg-[url('./istockphoto-185406129-612x612.jpg')] bg-no-repeat bg-cover bg-center w-full h-screen">
                <div className="absolute inset-0 bg-[black] opacity-70"></div>
                <div className="  relative flex items-center justify-center gap-[50px] flex-col w-full">
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
                        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} className="text-white text-[30px] font-medium">Login to Spotify</a>

                        <Button style="text-white bg-pink w-[10pc] border-pink shadow-landing font-medium pb-[6px]" linkTo="/signUp">Start Free Now </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

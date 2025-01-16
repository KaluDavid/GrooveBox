import React, { useEffect } from 'react'
import Hero from './components/Hero';
import { NewRelease } from './components/NewRelease';
import { MusicVideos } from './components/MusicVideos';
import { NowTrending } from './components/NowTrending';
export function Home() {


    // useEffect(function () {
    //     async function fetchNewReleased() {

    //         try {
    //             const res = await fetch("https://api.deezer.com/chart/116/albums");
    //             const data = await res.json();
    //             console.log(data)
    //         } catch (error) {
    //             console.log(error.message)
    //         }
    //     }
    //     fetchNewReleased();
    // }, [])

    return (
        <div className='font-Vazirmatn flex flex-col gap-[100px] pt-[42px] px-[20px] pr-[30px]'>
            {/* Hero section */}
            <Hero />

            {/* New Release Songs */}
            <NewRelease />

            {/* Trending songs */}
            <NowTrending />

            {/* mMusic Videos */}
            <MusicVideos />
        </div>
    )
}

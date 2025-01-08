import React, { useEffect } from 'react'
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import artist from "/imgs/artist.svg"
import adele from "/imgs/adele.svg"
import { SlideMusic } from '../../components/slideMusic/slideMusic';
import { Trending } from '../../components/trending/Trending';
import { ImSearch } from "react-icons/im";
import { Link } from 'react-router-dom';
import Hero from './components/Hero';
import { NewRelease } from './components/NewRelease';
import { NewReleased } from './components/NewReleased';
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
        <div className='font-Vazirmatn flex flex-col gap-[100px]  px-[20px] pr-[30px]'>
            {/* Hero section */}
            <Hero />

            {/* New Release SOngs */}
            <NewRelease />

            {/* Trending songs */}
            <Trending />

            {/* New Release SOngs */}
            <NewReleased />
        </div>
    )
}

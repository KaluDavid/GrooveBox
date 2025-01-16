import React from 'react'
import nowPlaying from "/imgs/nowPlaying.png"
import { Trending } from '../../../components/trending/Trending'
import artist from "/imgs/artist.svg"
import { Trend } from '../../../utils/Trend'


export function Current_play() {
    return (
        <section className=' flex items-start flex-col px-[20px] py-[22px] gap-2 w-full'>
            <h1 className='font-bold text-[30px] leading-[50px] [&_span]:text-pink  flex items-center gap-1 '>
                Current <span>Play</span>
                <img src={nowPlaying} alt="nowPlaying" />
            </h1>
            <ul className='flex flex-col gap-[20px] items-center w-full [&_strong]:opacity-80'>
                {Trend.map((data) => (
                    <Trending data={data} key={data.id} />
                ))}
            </ul>
        </section>)
}

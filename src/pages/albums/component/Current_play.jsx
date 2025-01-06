import React from 'react'
import nowPlaying from "/imgs/nowPlaying.png"
import { Trending } from '../../../components/trending/Trending'
import artist from "/imgs/artist.svg"


export function Current_play() {
    return (
        <section className=' flex items-start flex-col px-[20px] py-[22px] gap-2 w-full'>
            <h1 className='font-bold text-[30px] leading-[50px] [&_span]:text-pink  flex items-center gap-1 '>
                Current <span>Play</span>
                <img src={nowPlaying} alt="nowPlaying" />
            </h1>

            <ul className='flex flex-col gap-[20px] items-center w-full [&_strong]:opacity-80'>
                <Trending num={1} img={artist} name="The neighberhood" title="Sorfcore" date="Nov 4, 2023" album="Dance The Night(From Barbie Movie)" duration="3:23" />
                <Trending num={2} img={artist} name="The neighberhood" title="Sorfcore" date="Nov 4, 2023" album="Dance The Night(From Barbie Movie)" duration="3:23" />
                <Trending num={<img src={nowPlaying} alt="nowPlaying" />} img={artist} name="The neighberhood" title="Sorfcore" date="Nov 4, 2023" album="Dance The Night(From Barbie Movie)" duration="3:23" />
                <Trending num={4} img={artist} name="The neighberhood" title="Sorfcore" date="Nov 4, 2023" album="Dance The Night(From Barbie Movie)" duration="3:23" />
                <Trending num={5} img={artist} name="The neighberhood" title="Sorfcore" date="Nov 4, 2023" album="Dance The Night(From Barbie Movie)" duration="3:23" />
                <Trending num={6} img={artist} name="The neighberhood" title="Sorfcore" date="Nov 4, 2023" album="Dance The Night(From Barbie Movie)" duration="3:23" />
                <Trending num={7} img={artist} name="The neighberhood" title="Sorfcore" date="Nov 4, 2023" album="Dance The Night(From Barbie Movie)" duration="3:23" />

            </ul>

        </section>)
}

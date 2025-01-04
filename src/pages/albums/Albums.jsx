import React from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { FaArrowLeft } from "react-icons/fa6";
import music from "/imgs/music.png"
import nowPlaying from "/imgs/nowPlaying.png"
import { IoMdPlay } from "react-icons/io";
import { Trending } from '../../components/trending/Trending';
import artist from "/imgs/artist.svg"
import { useNavigate } from "react-router";


export function Albums() {
    const navigate = useNavigate();
    return (
        <div className='font-Vazirmatn flex flex-col rounded-lg  mx-[20px]  mr-[30px] album ' >
            <section className="w-full h-full albumHero flex gap-[50px] flex-col px-[20px] py-[22px] mb-[20px] rounded-b-xl pb-[40px]">
                <Header>
                    <span className='text-[33px] font-thin' onClick={() => navigate(-1)}><FaArrowLeft /></span>
                </Header >
                <div className=" w-full flex gap-[56px] text-left items-end justify-between ">
                    <div className="flex items-center gap-[20px]">
                        <img src={music} alt=" trending music" />
                        <div className="flex flex-col gap-[44px]">
                            <h1 className='text-[50px] font-normal leading-[62.5px] font-Anton  [&_span]:text-pink mb-[40px]'>
                                Trending songs <span>mix</span>
                            </h1>
                            <p>tate mcree, nightmares, the neighberhood, doja cat and ...</p>
                            <div className="flex gap-[20px] items-center">
                                <span>20 songs</span> <b className='rounded-full p-1 bg-pink border-0'></b>
                                <span>1h 36m</span>
                            </div>
                        </div>

                    </div>
                    <div className='flex items-center gap-[16px] text-pink font-medium'>
                        <p>Play All</p>
                        <span className="rounded-full border-4 border-pink p-3">
                            <IoMdPlay />
                        </span>
                    </div>
                </div>
            </section>

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

            </section>

        </div>
    )
}

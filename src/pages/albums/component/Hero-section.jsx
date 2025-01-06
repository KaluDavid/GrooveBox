import React from 'react'
import { Header } from '../../../components/Header'
import { FaArrowLeft } from "react-icons/fa6";
import music from "/imgs/music.png"
import { IoMdPlay } from "react-icons/io";
import { useNavigate } from "react-router";

export function Hero_section() {
    const navigate = useNavigate();

    return (
        <section className="w-full h-full albumHero flex gap-[50px] flex-col px-[20px] py-[22px] mb-[20px] rounded-b-xl pb-[40px]">
            <Header>
                <span className='text-[33px] font-thin cursor-pointer' onClick={() => navigate(-1)}><FaArrowLeft /></span>
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
        </section>)
}
// ['CSS', 'Javascript', 'UI design', 'Figma', 'Product managament', 'Node JS', 'React']
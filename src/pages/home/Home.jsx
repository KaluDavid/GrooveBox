import React from 'react'
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import artist from "/imgs/artist.svg"
import adele from "/imgs/adele.svg"
import { SlideMusic } from '../../components/slideMusic/slideMusic';
import { Trending } from '../../components/trending/Trending';
export function Home() {
    return (
        <div className='font-Vazirmatn flex flex-col gap-[100px]  px-[20px] pr-[30px]'>
            {/* Hero section */}
            <section className="relative w-full h-screen bg-[url('./imgs/homeHero.svg')] bg-no-repeat bg-cover bg-center rounded-[25px] py-[22px] px-[35px]">
                <div className="absolute inset-0 rounded-[25px] bg-[black] opacity-20"></div>

                <div className="relative flex gap-[130px] flex-col w-full ">
                    <Header />
                    <div className="flex flex-col gap-[20px] items-start justify-start text-left w-[50%]">
                        <h1 className='text-[50px] font-normal leading-[62.5px] font-Anton  [&_span]:text-pink mb-[40px]'>
                            All the <span>Best Songs</span> <br /> in One Place
                        </h1>
                        <p>On GrooveBox, you can access an amazing collection of popular and new songs. Stream your favorite tracks in high quality and enjoy without interruptions. Whatever your taste in music, we have it all for you!</p>
                        <div className=" flex items-center gap-[24px] w-full *:text-[17px] *:w-full *:font-normal *:text-center *:py-[10px] *:pt-3">
                            <Button style="text-white bg-pink  border-pink " >Discover Now </Button>
                            <Button style="text-blue  border-blue " >Create Playlist </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Release SOngs */}
            <section className='flex text-left flex-col gap-2 w-full'>
                <h1 className='font-bold text-[30px] leading-[50px] [&_span]:text-pink  '>
                    New Released <span>Songs</span>
                </h1>
                <SlideMusic style="[&_li]:w-[174px]">
                    <li>
                        <img src={artist} alt="artiste" />
                        <span>Time</span>
                        <small>Luciano</small>
                    </li>
                    <li>
                        <img src={artist} alt="artiste" />
                        <span>Time</span>
                        <small>Luciano</small>
                    </li>
                    <li>
                        <img src={artist} alt="artiste" />
                        <span>Time</span>
                        <small>Luciano</small>
                    </li>
                    <li>
                        <img src={artist} alt="artiste" />
                        <span>Time</span>
                        <small>Luciano</small>
                    </li>
                    <li>
                        <img src={artist} alt="artiste" />
                        <span>Time</span>
                        <small>Luciano</small>
                    </li>
                    <li>
                        <img src={artist} alt="artiste" />
                        <span>Time</span>
                        <small>Luciano</small>
                    </li>

                </SlideMusic>
            </section>

            {/* Trending songs */}
            <section className='flex text-left flex-col gap-2 w-full '>
                <h1 className='font-bold text-[30px] leading-[50px] [&_span]:text-pink  '>
                    Trending <span>Songs</span>
                </h1>

                <ul className='flex flex-col gap-[20px] items-center'>
                    <Trending num={1} img={artist} name="The neighberhood" title="Sorfcore" date="Nov 4, 2023" album="Dance The Night(From Barbie Movie)" duration="3:23" />
                    <Trending num={2} img={artist} name="The neighberhood" title="Sorfcore" date="Nov 4, 2023" album="Dance The Night(From Barbie Movie)" duration="3:23" />
                    <Trending num={3} img={artist} name="The neighberhood" title="Sorfcore" date="Nov 4, 2023" album="Dance The Night(From Barbie Movie)" duration="3:23" />
                    <Trending num={4} img={artist} name="The neighberhood" title="Sorfcore" date="Nov 4, 2023" album="Dance The Night(From Barbie Movie)" duration="3:23" />

                    <Button style="flex items-center w-[100px] white- border-none text-[15px]  bg-darkGray justify-center gap-1 whitespace-nowrap pt-[10px]">
                        + View All
                    </Button>
                </ul>
            </section>

            {/* New Release SOngs */}
            <section className='flex text-left flex-col gap-2 w-full'>
                <h1 className='font-bold text-[30px] leading-[50px] [&_span]:text-pink  '>
                    Music <span>Videos</span>
                </h1>

                <SlideMusic style="[&_li]:w-[272px]">
                    <li>
                        <img src={adele} alt="artiste" />
                        <span>Someone Like You</span>
                        <small>Adele</small>
                    </li>
                    <li>
                        <img src={adele} alt="artiste" />
                        <span>Someone Like You</span>
                        <small>Adele</small>
                    </li>

                    <li>
                        <img src={adele} alt="artiste" />
                        <span>Someone Like You</span>
                        <small>Adele</small>
                    </li>

                    <li>
                        <img src={adele} alt="artiste" />
                        <span>Someone Like You</span>
                        <small>Adele</small>
                    </li>
                </SlideMusic>
            </section>

        </div>
    )
}

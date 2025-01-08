import React from 'react'

export default function Hero() {
    return (
        <section className="relative w-full h-screen bg-[url('./imgs/homeHero.svg')] bg-no-repeat bg-cover bg-center rounded-[25px] py-[22px] px-[35px]">
            <div className="absolute inset-0 rounded-[25px] bg-[black] opacity-20"></div>

            <div className="relative flex gap-[130px] flex-col w-full ">
                <Header style="w-[40%]">
                    <>
                        <span className="*:scale-x-[-1] mr-[-28px]">
                            <ImSearch />
                        </span>
                        <input type="search" name="search" id="" placeholder='Search For Music, Artists,...' className=' rounded-lg bg-darkGray w-full px-4 py-2 text-opacity-40 pl-[35px] ' />
                    </>
                </Header>
                <div className="flex flex-col gap-[20px] items-start justify-start text-left w-[50%]">
                    <h1 className='text-[50px] font-normal leading-[62.5px] font-Anton  [&_span]:text-pink mb-[40px]'>
                        All the <span>Best Songs</span> <br /> in One Place
                    </h1>
                    <p>On GrooveBox, you can access an amazing collection of popular and new songs. Stream your favorite tracks in high quality and enjoy without interruptions. Whatever your taste in music, we have it all for you!</p>
                    <div className=" flex items-center gap-[24px] w-full  *:text-[17px]  *:w-full  *:font-normal  *:text-center *:py-[10px]  *:pt-3">
                        <Button style="text-white bg-pink w-full border-pink py-[10px] pt-3" linkTo="/album">Discover Now </Button>
                        <Button style="text-blue  border-blue " >Create Playlist </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

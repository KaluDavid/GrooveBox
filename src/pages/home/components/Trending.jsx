import React from 'react'

export function Trending() {
    return (
        <section className='flex items-end text-left flex-col gap-2 w-full '>
            <h1 className='font-bold text-[30px] leading-[50px] [&_span]:text-pink  '>
                Trending <span>Songs</span>
            </h1>

            <ul className='flex flex-col gap-[20px] items-center w-full'>
                <Trending num={1} img={artist} name="The neighberhood" title="Sorfcore" date="Nov 4, 2023" album="Dance The Night(From Barbie Movie)" duration="3:23" />
                <Trending num={2} img={artist} name="The neighberhood" title="Sorfcore" date="Nov 4, 2023" album="Dance The Night(From Barbie Movie)" duration="3:23" />
                <Trending num={3} img={artist} name="The neighberhood" title="Sorfcore" date="Nov 4, 2023" album="Dance The Night(From Barbie Movie)" duration="3:23" />
                <Trending num={4} img={artist} name="The neighberhood" title="Sorfcore" date="Nov 4, 2023" album="Dance The Night(From Barbie Movie)" duration="3:23" />

                <Button style="flex items-center w-[100px] white- border-none text-[15px]  bg-darkGray justify-center gap-1 whitespace-nowrap pt-[10px]" linkTo="/album">
                    + View All
                </Button>
            </ul>
        </section>
    )
}

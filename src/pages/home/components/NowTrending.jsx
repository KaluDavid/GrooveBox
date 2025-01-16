import React from 'react'
import { Button } from '../../../components/Button'
import { Trend } from '../../../utils/Trend'
import { Trending } from '../../../components/trending/Trending'

export function NowTrending() {
    return (
        <section className='flex items-end text-left flex-col gap-2 w-full '>
            <h1 className='font-bold text-[30px] leading-[50px] [&_span]:text-pink  '>
                Trending <span>Songs</span>
            </h1>

            <ul className='flex flex-col gap-[20px] items-center w-full'>
                {Trend.map((data) => (
                    <Trending data={data} key={data.id} />
                ))}

                <Button style="flex items-center w-[100px] white- border-none text-[15px]  bg-darkGray justify-center gap-1 whitespace-nowrap pt-[10px]" linkTo="/album">
                    + View All
                </Button>
            </ul>
        </section>
    )
}

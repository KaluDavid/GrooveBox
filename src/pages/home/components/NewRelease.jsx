import React from 'react'
import { SlideMusic } from '../../../components/slideMusic/SlideMusic'
import { Released } from '../../../utils/Released'
export function NewRelease() {
    return (
        <section className='flex text-left flex-col gap-2 w-full'>
            <h1 className='font-bold text-[30px] leading-[50px] [&_span]:text-pink  '>
                New Released <span>Songs</span>
            </h1>

            <SlideMusic style="[&_li]:w-[174px]">
                {Released.map((data) => (
                    <li key={data.id} >
                        <img src={data.img} alt={data.songName} />
                        <span>{data.songName}</span>
                        <small>{data.artist}</small>
                    </li>
                ))}
            </SlideMusic>
        </section>)
}

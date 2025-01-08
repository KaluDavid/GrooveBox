import React from 'react'

export function NewRelease() {
    return (
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
        </section>)
}

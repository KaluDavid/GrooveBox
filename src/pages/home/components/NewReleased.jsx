import React from 'react'

export function NewReleased() {
    return (
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
    )
}

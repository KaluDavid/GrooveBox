import React from 'react'
import heart from "/icons/heart.svg"

export function Trending({ num, img, name, title, date, album, duration }) {
    return (
        <li className="flex items-center justify-between gap-[40px] w-full">
            <strong className='opacity-30 flex items-center gap-[2px]'>#{num}</strong>
            <div className="rounded-[5px] bg-darkGray flex items-center justify-between w-full pr-3">
                <img src={img} alt={name} className='rounded-[5px] h-[60px] w-[60px] object-cover' />
                <p className='flex flex-col gap-1 [&_small]:font-light'>
                    {title}
                    <small>{name}</small>
                </p>
                <p>{date}</p>
                <p>{album}</p>
                <p className='flex gap-1 items-center justify-center'> <img src={heart} alt='favorite song' /> <span className='pt-1'>{duration}</span></p>
            </div>
        </li>
    )
}

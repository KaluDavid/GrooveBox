import React from 'react'

export function Trending({ data }) {
    return (
        <li className="flex items-center justify-between gap-[40px] w-full">
            <strong className='opacity-30 flex items-center gap-[2px]'>{data.numb === true ? <img src={data.num} alt="now playing" /> : `#${data.num}`}</strong>
            <div className="rounded-[5px] bg-darkGray flex items-center justify-between w-full pr-3">
                <img src={data.img} alt={data.title} className='rounded-[5px] h-[60px] w-[60px] object-cover' />
                <p className='flex flex-col gap-1 [&_small]:font-light'>
                    {data.title}
                    <small>{data.artist}</small>
                </p>
                <p>{data.date}</p>
                <p>{data.album}</p>
                <p className='flex gap-1 items-center justify-center'> <img src={data.favorite} alt='favorite song' /> <span className='pt-1'>{data.duration}</span></p>
            </div>
        </li>
    )
}

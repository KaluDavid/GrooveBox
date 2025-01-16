import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

export function FavSongs({ data }) {
    return (
        <li className="rounded-[5px] text-left bg-darkGray flex items-center justify-between py-[20px] px-3 w-full  gap-[40px]">
            <div className='flex gap-3 w-[12%] items-start'>
                <p className='opacity-30 flex gap-[2px]'>{data.numb === true ? <img src={data.num} alt="now playing" /> : data.num}</p>
                <p className='flex flex-col gap-1 [&_small]:font-light'>{data.title.length > 5 ? "hey nigga" : data.title}</p>
            </div>

            <p>{data.artist}</p>

            <p className='w-[10%]'>
                <RiDeleteBin6Line />
            </p>

            <span className='pt-1'>{data.duration}</span>
        </li>
    )
}

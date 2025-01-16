import React, { useState } from 'react'
import Oops from './Oops'
import { Trend } from '../../../utils/Trend'
import { FavSongs } from './FavSongs'
import { useLocation } from 'react-router-dom'

export function Fav() {
    const locate = useLocation()

    function loc() {
        if (locate.pathname === "/favorite") Trend.length === 0

    }
    return (
        <section className='mx-[30px] flex flex-col justify-center '>
            {Trend.length && loc > 0 ? <div>

                <div className='flex mb-[20px] items-start w-full justify-between'>
                    <div className='flex items-center gap-6 '>
                        <span>#</span>  <span>Title</span>
                    </div>
                    <span>Artist</span>
                    <span></span>
                    <span>Time</span>
                </div>

                <div className='flex flex-col gap-[20px] items-start w-full [&_strong]:opacity-80'>
                    {Trend.map((data) => (
                        <FavSongs data={data} key={data.id} />
                    ))}
                </div>
            </div>
                :
                <Oops />}
        </section >
    )
}

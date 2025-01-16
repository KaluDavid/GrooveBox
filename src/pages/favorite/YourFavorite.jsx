import React from 'react'
import { Hero } from './components/Hero'
import { Fav } from './components/Fav'

export default function YourFavorite() {
    return (
        <div className='font-Vazirmatn flex flex-col gap-[42px] rounded-lg  relative w-full pt-2' >
            <Hero />

            <Fav />
        </div>
    )
}

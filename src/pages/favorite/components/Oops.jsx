import React from 'react'
import oops from "/icons/oops.svg"

export default function Oops() {
    return (
        <div className="flex items-center flex-col ">
            <img src={oops} alt="" className='w-[100px] animate-pulse' />
            <h1 className="font-Ojuju flex items-center justify-center pb-[1%] logo-gradient font-bold text-4xl animate-pulse">
                .... Oops You're yets to add your favorite musics
            </h1>
        </div>
    )
}

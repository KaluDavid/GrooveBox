import React from 'react'
import { Hero_section } from './component/Hero-section';
import { Current_play } from './component/Current_play';


export function Albums() {
    return (
        <div className='font-Vazirmatn flex flex-col rounded-lg  mx-[20px]  mr-[30px] album ' >
            <Hero_section />
            <Current_play />
        </div>
    )
}

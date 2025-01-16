import React from 'react'
import { Header } from '../../../components/Header'
import { ImSearch } from 'react-icons/im'

export function Hero() {
    return (
        <section className='px-[30px] albumHero py-4    w-full'>
            <Header style="w-[42%] ">
                <>
                    <span className="*:scale-x-[-1] mr-[-28px]">
                        <ImSearch />
                    </span>
                    <input type="search" name="search" id="" placeholder='Search For Music, Artists,...' className=' rounded-lg bg-darkGray w-full px-4 py-2 text-opacity-40 pl-[35px] ' />
                </>
            </Header>
        </section>
    )
}

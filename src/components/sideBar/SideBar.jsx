import React from 'react'
import Logo from '../Logo'

export function SideBar() {
    return (
        <div className=' flex flex-col gap-[24px] text-white font-medium left-11 fixed z-10'>
            <Logo />
            <span>Hello World</span>
            <span>Hello World</span>
            <span>Hello World</span>
            <span>Hello World</span>
            <span>Hello World</span>
        </div>
    )
}

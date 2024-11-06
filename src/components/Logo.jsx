import React from 'react'
import logo from '/logo.svg'

export default function Logo() {
    return (
        <div className='flex items-center gap-[2px] justify-center'>
            <img src={logo} alt="grooveBox logo" />
            <h1 className="logo-gradient text-[25px] font-bold font-Vazirmatn inline-block">GrooveBox</h1>
        </div>
    )
}

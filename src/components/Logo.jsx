import React from 'react'
import logo from '/logo.svg'
import { Link } from 'react-router-dom';

export default function Logo({ to }) {
    return (
        <Link to={to || "/home"}>
            <div className='flex items-center gap-[2px] justify-center'>
                <img src={logo} alt="grooveBox logo" />
                <h1 className="logo-gradient text-[25px] font-bold font-Vazirmatn inline-block">GrooveBox</h1>
            </div></Link>
    )
}

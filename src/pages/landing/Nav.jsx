import React from 'react'
import Logo from '../../components/Logo'
import { Button } from '../../components/Button'


export default function Nav() {
    return (
        <div className='flex items-center justify-between w-full'>
            <Logo />
            <div className="flex items-center gap-[12px] ">
                <Button style="border-pink text-pink w-[10pc] rounded" linkTo="/Login">
                    <span>Login</span>
                </Button>
                <Button style="border-pink text-white w-[10pc] bg-pink rounded" linkTo="/signUp">
                    <span>Sign Up</span>
                </Button>
            </div>
        </div>
    )
}

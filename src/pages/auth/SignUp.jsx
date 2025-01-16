import React from 'react'
import Logo from '../../components/Logo'
import { Button } from '../../components/Button'
import google from '/icons/google.svg'
import twitter from '/icons/twitter.svg'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'

export function SignUp() {
    return (
        <>
            <form action="" className="flex flex-col items-center gap-5 [&_div]:flex [&_div]: bg-bgColor w-full h-screen text-white justify-center text-opacity-70">
                <Logo to="/" />
                <div className='rounded-2xl w-[33%] py-6 px-4 flex flex-col items-center justify-center gap-5  border-borderColor border border-opacity-40 login'>
                    <div className='flex flex-col text-center gap-[8px] w-full [&_button]:border-borderColor [&_button]:items-center [&_button]:gap-2 [&_button]:w-full  [&_button]:flex [&_button]:justify-center [&_button]:border-opacity-40'>
                        <Button>
                            <img src={google} alt="google icon" /> <span>sign up with google</span>
                        </Button>
                        <Button>
                            <img src={twitter} alt="twitter icon" /> <span>sign up with twitter</span>
                        </Button>
                    </div>
                    <div className='[&_hr]:border [&_hr]:border-borderColor [&_hr]:w-full w-full flex items-center gap-2  [&_span]:text-[14px] [&_span]:font-medium [&_span]:opacity-50 [&_hr]:border-opacity-40'>
                        <hr /> <span>OR</span> <hr />
                    </div>
                    <div className='flex items-center flex-col gap-[12px] text-left w-full'>

                        <Input type="name" name="Name" input="text" />
                        <Input type="email" name="Email" input="email" />
                        <Input type="password" name="Password" input="password" />
                        <div className="flex items-center flex-col gap-2 w-full mt-[10px] *:w-full">
                            <Button style="border-pink text-white w-full bg-pink" linkTo="/home">
                                <span>Sign Up</span>
                            </Button>
                        </div>
                        <p>Already have an account? <span className='text-pink'><Link to="/Login">login</Link></span></p>
                    </div>
                </div>
            </form>
        </>
    )
}
// drop-shadow-authShadow
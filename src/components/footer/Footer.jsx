import React from 'react'
import Logo from '../Logo'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

export function Footer() {
    return (
        <footer className="pt-[44px]  [&_p]:text-[14px]  bg-darkGray flex items-center gap-[50px] flex-col w-full font-poppins">
            <section className="flex justify-between w-full  px-[40px] ">
                <div className='flex flex-col items-start w-[22rem] text-left gap-[16px]'>
                    <Logo />
                    <p className="text-grey text-[13px]">
                        DumyMusic is the source for royalty free music. Elevate your projects with our diverse collection. Simplify your licensing process and unleash your creativity. Join us today!
                    </p>
                </div>
                <div className="flex items-start gap-[100px] [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-[20px] [&_ul]:text-left text-[13px] w-[50%] ">
                    <ul>
                        <li className='text-opacity-60 pb-1 text-grey'>Support</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                    <ul>
                        <li className='text-opacity-60 pb-1 text-grey'>Social Media</li>
                        <li>For recent updates and news follow <br /> our social media feeds.</li>
                        <li className="flex items-center gap-6 text-[20px]">
                            <FaXTwitter />
                            <FaLinkedin />
                            <LuMail />
                        </li>
                    </ul>
                </div>
            </section>
            <p className='text-grey bg-bgColor w-full py-6 flex items-center justify-center'>
                Copyright © GrooveBox Team
            </p>
        </footer>
    )
}

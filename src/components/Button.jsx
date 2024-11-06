import React from 'react'
import { Link } from 'react-router-dom'
export function Button({ children, style, linkTo }) {
    return (
        <>
            {linkTo ? (
                <Link to={linkTo}>
                    <button className={` py-[6px] px-4 border rounded-lg ${style}`}>
                        {children}
                    </button>
                </Link>
            ) : (
                <button className={` py-[6px] px-4 border  rounded-lg ${style}`}>
                    {children}
                </button>
            )

            }
        </>
    )
}

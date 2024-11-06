import React from 'react'

export function Input({ type, name, input }) {
    return (
        <div className='flex flex-col gap-2 w-full '>
            <label htmlFor={type}>{name}*</label>
            <input type={input} name={type} placeholder={`Enter your ${type}`} className='border rounded-lg bg-bgColor w-full px-4 py-2 text-opacity-40' />
        </div>
    )
}

import React from 'react'

export function SlideMusic({ children, style }) {
    return (
        <div className="w-full max-w-full overflow-x-auto hide-scrollbar">
            <ul className={`flex gap-6 [&_li]:rounded-[10px]  [&_li]:bg-darkGray [&_li]:py-1 [&_li]:px-[15px] [&_li]:h-[214px]  [&_li]:flex [&_li]:flex-col [&_li]:gap-2 [&_small]:font-light w-full overflow-x-auto min-w-max ${style} `}>
                {children}
            </ul>
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import oops from "/icons/oops.svg"

export default function Oops() {
    const [data, setData] = useState(null);

    const fetchWeather = async () => {
        try {
            const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=d5d46f1307d74a67b61953156c05e22a&units=metric");
            if (!res.ok) {
                throw new Error("failed to fetch weather data")
            }
            const data = await res.json();
            setData(data)
            console.log(data)
        } catch (error) {
            console.log(`you have an error reading`, error)
            console.error("You have an error reading", error);
        }

    }

    useEffect(() => {
        fetchWeather()
    }, [])

    return (
        <div className="flex items-center flex-col ">
            <img src={oops} alt="" className='w-[100px] animate-pulse' />
            <h1 className="font-Ojuju flex items-center justify-center pb-[1%] logo-gradient font-bold text-4xl animate-pulse">
                .... Oops You're yets to add your favorite musics
            </h1>

            <p className='bg-white text-[red] text-2xl'>
                {data.base}
            </p>
        </div>
    )
}
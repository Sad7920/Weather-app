import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from '@iconscout/react-unicons'
import { formatToLocaleTime, iconUrlFromCode } from '../services/weatherServices'

const TemperatureAndDetails = ({ weather: {
    details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone
} }) => {
    return (
        <div>
            <div className='flex items-center justify-center pb-2 text-xl text-cyan-300'>
                <p>{details}</p>
            </div>
            <div className='flex flex-row items-center justify-between py-3'>
                <img src={iconUrlFromCode(icon)} alt="img" className='w-20' />
                <p className='text-5xl'>{temp.toFixed()}°</p>
                <div className='flex flex-col space-y-2'>
                    <div className='flex items-center justify-center text-sm font-light'>
                        <UilTemperature size={18} className="mr-1" />
                        Real Feel:
                        <span className='ml-1 font-medium'>{feels_like.toFixed()}°</span>
                    </div>
                    <div className='flex items-center justify-center text-sm font-light'>
                        <UilTear size={18} className="mr-1" />
                        Humidity:
                        <span className='ml-1 font-medium'>{humidity}</span>
                    </div>
                    <div className='flex items-center justify-center text-sm font-light'>
                        <UilWind size={18} className="mr-1" />
                        Wind:
                        <span className='ml-1 font-medium'>{speed} km/h</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center py-3 space-x-2 text-sm'>
                <UilSun />
                <p className='font-light '>
                    Rise: <span className='ml-1 font-medium '>{formatToLocaleTime(sunrise, timezone, 'hh:mm a')}</span>
                </p>
                <p className='font-light'>|</p>

                <UilSunset />
                <p className='font-light '>
                    Set: <span className='ml-1 font-medium '>{formatToLocaleTime(sunset, timezone, 'hh:mm a')}</span>
                </p>
                <p className='font-light'>|</p>

                <UilArrowUp />
                <p className='font-light '>
                    High: <span className='ml-1 font-medium '>{temp_max.toFixed()}°</span>
                </p>
                <p className='font-light'>|</p>

                <UilArrowDown />
                <p className='font-light '>
                    Low: <span className='ml-1 font-medium '>{temp_min.toFixed()}°</span>
                </p>

            </div>
        </div>
    )
}

export default TemperatureAndDetails
import React from 'react'
import { formatToLocaleTime } from '../services/weatherServices'

const TimeAndLocation = ({ weather: { dt, timezone, name, country } }) => {


    return (
        <div>
            <div className='flex items-center justify-center my-4'>
                <p className='text-xl font-extralight'>{formatToLocaleTime(dt, timezone)}</p>
            </div>
            <div className='flex items-center justify-center my-6'>
                <h1 className='text-3xl font-medium'>{name}, {country} </h1>
            </div>
        </div>
    )
}

export default TimeAndLocation
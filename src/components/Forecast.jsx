import React from 'react'
import { iconUrlFromCode } from '../services/weatherServices'

const Forecast = ({ title, items }) => {
    console.log(items);
    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='font-medium'>{title}</p>
            </div>
            <hr className='my-2' />
            <div className='flex flex-row items-center justify-between'>
                {items.map((item) => (
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-sm font-light'>{item.title}</p>
                        <img src={iconUrlFromCode(item.icon)} alt="img" className='w-12 my-1 ' />
                        <p className='font-medium'>{Math.round(item.temp)}°</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Forecast
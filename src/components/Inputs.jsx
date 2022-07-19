import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

const Inputs = ({ setQuery, units, setUnits }) => {

    const [city, setCity] = useState('')

    const handleSearchClick = () => {
        if (city) {
            setQuery({ q: city })
        }
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon,
                })
            })
        }
    }

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name;

        if (units !== selectedUnit) {
            setUnits(selectedUnit)
        }
    }

    return (
        <div className='flex flex-row justify-around my-6'>
            <div className='flex flex-row items-center justify-center space-x-4'>
                <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" placeholder='Search location...' className='w-full px-4 py-[0.35rem] text-xl font-light text-blue-800 text-opacity-100 capitalize rounded-full shadow-xl outline-none opacity-60 ' />
                <UilSearch onClick={handleSearchClick} size={30} className="transition ease-out cursor-pointer hover:text-gray-300 hover:scale-125 " />
                <UilLocationPoint onClick={handleLocationClick} size={30} className="transition ease-out cursor-pointer hover:text-gray-300 hover:scale-125 " />
            </div>
            <div className='flex flex-row items-center justify-center '>
                <button onClick={handleUnitsChange} name='metrix' className='text-xl font-light hover:text-gray-300 '>°C</button>
                <p className='mx-2 text-2xl'>|</p>
                <button onClick={handleUnitsChange} name='imperial' className='text-xl font-light hover:text-gray-300 '>°F</button>
            </div>
        </div>
    )
}

export default Inputs
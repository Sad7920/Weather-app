import React from 'react'

function TopButton({ setQuery }) {

    const cities = [
        {
            id: 1,
            title: 'London'
        },
        {
            id: 2,
            title: 'Mumbai'
        },
        {
            id: 3,
            title: 'Tokyo'
        },
        {
            id: 4,
            title: 'Sydney'
        },
        {
            id: 5,
            title: 'Pune'
        },
    ]

    return (
        <div className='flex items-center justify-around my-6'>
            {cities.map(city => {
                return (<button onClick={() => setQuery({ q: city.title })} key={city.id} className='text-lg font-medium hover:text-gray-300'>{city.title}</button>)
            })}
        </div>
    )
}

export default TopButton
import React from 'react'
import { Link } from "react-router-dom"

const ShoeCard = ({ shoe }) => {
    return (
        <div className='border rounded-xl p-4 shadow hover:shadow-lg transition'>
            <img src={shoe.image} alt={shoe.name} className='w-full h-48 object-cover rounded-md mb-4' />
            <h3 className='text-lg font-semibold mt-2'>{shoe.name}</h3>
            <p className='text-black mt-2'>${shoe.price}</p>
            <p className="text-yellow-500">⭐ {shoe.rating}</p>
            <Link to={`/product/${shoe.id}`}>
                <button className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                    View Details
                </button>
            </Link>
        </div>
    )
}

export default ShoeCard
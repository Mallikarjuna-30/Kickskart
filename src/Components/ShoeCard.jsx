import React, { useState } from 'react'
import { Link } from "react-router-dom"

const ShoeCard = ({ shoe }) => {
    const [loading, setLoading] = useState(false)

    return (
        <div className="border rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col hover:bg-white/80 backdrop-blur-sm">

            {/* Image Container */}
            <div className='w-full h-48 bg-gray-200 rounded-md overflow-hidden relative group'>

                {!loading && (
                    <div className="absolute inset-0 animate-pulse bg-gray-300"></div>
                )}

                <img
                    src={shoe.image}
                    alt={shoe.name}
                    loading='lazy'
                    onLoad={() => setLoading(true)}
                    className={`w-full h-full object-cover transition-all duration-500 ${loading ? "opacity-100 scale-100" : "opacity-0 scale-110"
                        } group-hover:scale-110`}
                />
            </div>

            {/* Content */}
            <h3 className='text-lg font-semibold mt-3 transition-colors duration-300 group-hover:text-gray-700'>{shoe.name}</h3>
            <p className='text-black mt-1'>₹{shoe.price}</p>
            <p className="text-yellow-500">⭐ {shoe.rating}</p>

            {/* Button */}
            <Link to={`/product/${shoe.id}`} className="mt-auto">
                <button className="mt-3 w-full bg-black text-white py-2 rounded transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02]">
                    View Details
                </button>
            </Link>

        </div>
    )
}

export default ShoeCard
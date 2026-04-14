import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import shoes from '../Data/shoes'

const ShoeDetailPage = () => {
    const { id } = useParams()
    const shoe = shoes.find((item) => item.id === parseInt(id))
    const [selectedSize, setSelectedSize] = useState(null)
    if (!shoe) return <h1 className="text-center mt-10">Shoe not found</h1>

    return (
        <div className="p-6 md:flex gap-10 mt-10">
            {/* LEFT: IMAGE */}
            <div className="md:w-1/2">
                <img
                    src={shoe.image}
                    alt={shoe.name}
                    className="w-full h-[400px] object-cover rounded-xl shadow"
                />
            </div>

            {/* RIGHT: DETAILS */}
            <div className="md:w-1/2 mt-6 md:mt-0">
                <h1 className="text-3xl font-bold">{shoe.name}</h1>
                <p className="text-gray-500 mt-1">{shoe.brand}</p>
                <p className="text-2xl text-blue-600 font-semibold mt-3">
                    ₹{shoe.price}
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                    {shoe.description}
                </p>

                {/* SIZE SELECTION */}
                <div className="mt-6">
                    <p className="font-semibold mb-2">Select Size:</p>
                    <div className="flex gap-3">
                        {shoe.sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`px-4 py-2 border rounded-lg transition 
                  ${selectedSize === size
                                        ? 'bg-black text-white'
                                        : 'hover:bg-black hover:text-white'}`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* BUTTON */}
                <button
                    className={`mt-8 w-full py-3 rounded-lg text-white font-semibold transition
            ${selectedSize
                            ? 'bg-black hover:bg-gray-800'
                            : 'bg-gray-400 cursor-not-allowed'}`}
                    disabled={!selectedSize}
                >
                    {selectedSize ? "Add to Cart" : "Select Size First"}
                </button>
            </div>
        </div>
    )
}

export default ShoeDetailPage
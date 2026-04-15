import React from 'react'
import { Link } from 'react-router-dom'
const OrderSuccessPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center px-4">

            {/* ICON */}
            <div className="text-green-500 text-6xl mb-4">
                ✅
            </div>

            <h1 className="text-3xl font-bold mb-2">
                Order Placed Successfully!
            </h1>

            <p className="text-gray-500 mb-6">
                Thank you for shopping with us 👟
            </p>

            <Link to="/">
                <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
                    Continue Shopping
                </button>
            </Link>
        </div>
    )
}

export default OrderSuccessPage
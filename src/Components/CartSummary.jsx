import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartSummary = () => {
    const { cart } = useContext(CartContext)
    const navigate = useNavigate()

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shipping = 100
    const total = subtotal + shipping
    return (
        <div className="w-full md:w-80 border p-6 rounded-lg shadow-sm h-fit sticky top-24">
            <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>
            <div className='flex justify-between mb-2'>
                <span>SubTotal</span>
                <span>₹{subtotal}</span>
            </div>
            <div className='flex justify-between mb-2'>
                <span>Shipping</span>
                <span>₹{shipping}</span>
            </div>
            <div className='flex justify-between mb-2'>
                <span>Total</span>
                <span>₹{total}</span>
            </div>
            <button onClick={() => navigate('/checkout')}
                className='w-full mt-6 bg-black text-white py-3 rounded hover:bg-gray-800'>
                Proceed to Checkout
            </button>
        </div>
    )
}

export default CartSummary
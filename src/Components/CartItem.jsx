import React, { useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
const CartItem = ({ item }) => {
    const { increaseQty, decreaseQty, removeFromCart } = useContext(CartContext)
    const navigate = useNavigate()
    return (
        <div className='flex gap-4 border p-4 rounded-lg shadow-sm'>
            <img src={item.img} alt={item.name}
                className='w-24 h-24 object-cover rounded'
            />
            <div className='flex-1'>
                <h2 className='font-semibold'>{item.name}</h2>
                <p className='text-gray-500 text-sm'>Size: {item.size}</p>
                <p className='text-black font-bold mt-1'>₹{item.price}</p>
                <div className='flex items-center gap-3 mt-3'>
                    <button onClick={() => decreaseQty(item.id, item.size)}
                        className="px-3 py-1 border rounded">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id, item.size)}
                        className="px-3 py-1 border rounded">+</button>
                </div>
                <button onClick={() => removeFromCart(item.id, item.size)}
                    className="text-red-500 hover:text-red-700 mt-2">Remove</button>
            </div>
        </div>
    )
}

export default CartItem
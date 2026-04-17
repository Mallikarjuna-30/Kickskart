import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
const Navbar = () => {
    const { cart } = useContext(CartContext)
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
    return (
        <div className='flex justify-between items-center px-6 py-4 shadow-md'>
            <Link to="/" className='text-2xl font-bold text-black cursor-pointer'>KicksKart</Link>
            <div className='flex gap-4'>
                <Link to="/" className='text-lg font-medium hover:text-orange-600 transition-all duration-300 cursor-pointer'>Home</Link>
                <Link to="/cart" className=' relative text-lg font-medium hover:text-orange-600 transition-all duration-300 cursor-pointer'>Cart</Link>
                <span className="text-2xl hover:scale-110 transition">🛒</span>
                {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full mt-3 mr-3">
                        {totalItems}
                    </span>
                )}
            </div>
        </div>
    )
}

export default Navbar
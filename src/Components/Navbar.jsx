import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-6 py-4 shadow-md'>
            <Link to="/" className='text-2xl font-bold text-black cursor-pointer'>KicksKart</Link>
            <div className='flex gap-4'>
                <Link to="/" className='text-lg font-medium hover:text-orange-600 transition-all duration-300 cursor-pointer'>Home</Link>
                <Link to="/Cart" className='text-lg font-medium hover:text-orange-600 transition-all duration-300 cursor-pointer'>Cart</Link>
            </div>
        </div>
    )
}

export default Navbar
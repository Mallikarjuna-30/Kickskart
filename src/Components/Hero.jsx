import React from 'react'

const Hero = () => {
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center text-center bg-gray-100 px-4'>
            <h1 className='text-3xl md:text-6xl text-bold mb-4'>
                Step Into Style 👟
            </h1>
            <p className='text-gray-400 mb-6 max-w-xl'>
                Discover the latest sneakers with premium comfort and style
            </p>
            <a href="#products">
                <div className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition'>
                    Shop Now
                </div>
            </a>
        </div>
    )
}

export default Hero
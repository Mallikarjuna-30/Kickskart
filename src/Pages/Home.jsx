import React from 'react'
import shoes from '../Data/shoes'
import ShoeCard from '../Components/ShoeCard'
import Hero from '../Components/Hero'
const Home = () => {
    return (
        <>
            <Hero />
            <div className="h-20 bg-linear-gradient-to-b from-black/20 to-gray-50"></div>
            <div id="products" className='p-6 md:p-10 bg-gray-50'>
                <h2 className='text-3xl font-bold mb-8 text-center'>Our Collection</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {shoes.map((shoe) => (
                        <ShoeCard key={shoe.id} shoe={shoe} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home
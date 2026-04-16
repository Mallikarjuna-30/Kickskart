import React from 'react'
import shoes from '../Data/shoes'
import ShoeCard from '../Components/ShoeCard'
import Hero from '../Components/Hero'
const Home = () => {
    return (
        <>
            <Hero />
            <div id="products" className='p-6'>
                <h2 className='text-2xl font-bold mb-6 text-center'>Our Collection</h2>
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
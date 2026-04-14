import React from 'react'
import shoes from '../Data/shoes'
import ShoeCard from '../Components/ShoeCard'

const Home = () => {
    return (
        <div className='p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {shoes.map((shoe) => (
                <ShoeCard key={shoe.id} shoe={shoe} />
            ))}
        </div>
    )
}

export default Home
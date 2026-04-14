import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import ShoeDetailPage from './Pages/ShoeDetailPage'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ShoeDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
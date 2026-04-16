import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import ShoeDetailPage from './Pages/ShoeDetailPage'
import { Routes, Route } from 'react-router-dom'
import Cart from './Pages/CartPage'
import CheckoutPage from './Pages/CheckoutPage'
import OrderSuccessPage from './Pages/OrderSuccessPage'
import ToastUI from './Components/ToastUI'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ShoeDetailPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
      </Routes>
      <ToastUI />
    </div>
  )
}

export default App
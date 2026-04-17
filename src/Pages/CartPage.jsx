import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import CartItem from "../Components/CartItem"
import CartSummary from "../Components/CartSummary"
const Cart = () => {
    const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext)

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    )

    return (
        <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 space-y-6">
                        {cart.map((item) => (
                            <CartItem key={item.id + item.size} item={item} />
                        ))}
                    </div>
                    <CartSummary />
                </div>
            )}
        </div>
    )
}

export default Cart
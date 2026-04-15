import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"

const Cart = () => {
    const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext)

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    )

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div
                            key={`${item.id}-${item.size}`}
                            className="flex justify-between items-center border-b py-4"
                        >
                            <div>
                                <h2 className="font-semibold">{item.name}</h2>
                                <p>Size: {item.size}</p>
                                <div className="flex items-center gap-3 mt-2">
                                    <button
                                        onClick={() => decreaseQty(item.id, item.size)}
                                        className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                                    >
                                        -
                                    </button>

                                    <span>{item.quantity}</span>

                                    <button
                                        onClick={() => increaseQty(item.id, item.size)}
                                        className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div>
                                <p>₹{item.price * item.quantity}</p>
                                <button
                                    onClick={() => removeFromCart(item.id, item.size)}
                                    className="text-red-500 mt-2"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}

                    <h2 className="text-xl font-bold mt-6">
                        Total: ₹{total}
                    </h2>

                    <Link to="/checkout">
                        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded">
                            Proceed to Checkout
                        </button>
                    </Link>
                </>
            )}
        </div>
    )
}

export default Cart